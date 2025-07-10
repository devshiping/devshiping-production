"use client";

import Script from "next/script";

const WhatsAppWidget = () => {
  return (
    <Script id="whatsapp-chat-widget" strategy="afterInteractive">
      {`
        (function () {
          var options = {
            whatsapp: "+919643570809",
            call_to_action: "💬 Chat with us",
            position: "right",
            message: "Hi! I'm interested in your services. Can we talk about Website, App, or Hosting?",
            pre_filled_message: "Hi! I was directed to this chat by the Devshiping website. I would like to discuss my project with you.",
          };
          var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
          var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
          s.src = url + "/widget-send-button/js/init.js";
          s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
          var x = document.getElementsByTagName("script")[0]; x.parentNode.insertBefore(s, x);
        })();
      `}
    </Script>
  );
};

export default WhatsAppWidget;
