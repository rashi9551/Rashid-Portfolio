import React from "react";
import whatsappIcon from "../assets/whatsapp1.png";
import Tooltip from "./Tooltip";

const WhatsappChat = () => {
  return (
    <a
      href="https://wa.me/+917736612328"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10  text-white rounded-full p-2 shadow-lg transform transition-transform duration-300 hover:scale-110"
    >
      <img src={whatsappIcon} alt="WhatsApp Icon" className="w-8 h-8" />
    </a>
  );
};

export default WhatsappChat;
