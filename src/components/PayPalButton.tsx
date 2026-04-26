import { useEffect, useRef } from "react";

const N8N_WEBHOOK = "https://n8n.srv1269197.hstgr.cloud/webhook/paypal-hichamclips";
const CLIENT_ID = "AYzmQMN-n1eeYlCCI_Efimk9Ti6UE8APgKZ67MmpBTo6vjG80glMRdW6MjxLiqNE7F1ZJ0qwiZROLGBo";

declare global {
  interface Window {
    paypal?: any;
  }
}

interface Props {
  planId: string;
  planName: string;
  amount: string;
}

const PayPalButton = ({ planId, planName, amount }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (rendered.current) return;

    const scriptId = "paypal-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&vault=true&intent=subscription`;
      script.setAttribute("data-sdk-integration-source", "button-factory");
      script.onload = () => renderButton();
      document.body.appendChild(script);
    } else if (window.paypal) {
      renderButton();
    }

    function renderButton() {
      if (!containerRef.current || rendered.current) return;
      rendered.current = true;

      window.paypal.Buttons({
        style: {
          shape: "rect",
          color: "gold",
          layout: "vertical",
          label: "subscribe",
        },
        createSubscription: (_data: any, actions: any) => {
          return actions.subscription.create({ plan_id: planId });
        },
        onApprove: async (data: any) => {
          const payload = {
            subscriptionID: data.subscriptionID,
            planId: planId,
            planName: planName,
            amount: amount,
            email: data.payer?.email_address || "",
            name: data.payer?.name
              ? `${data.payer.name.given_name || ""} ${data.payer.name.surname || ""}`.trim()
              : "",
            date: new Date().toISOString(),
            status: "Active",
          };

          try {
            await fetch(N8N_WEBHOOK, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload),
            });
          } catch (_) {}

          window.location.href = "/thank-you";
        },
      }).render(containerRef.current);
    }
  }, []);

  return <div ref={containerRef} className="w-full" />;
};

export default PayPalButton;
