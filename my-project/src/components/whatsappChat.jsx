import React from "react";
import whatsappIcon from "../assets/whatsapp.png";  // Ensure you have the correct path to the WhatsApp icon

const WhatsappChat = () => {
  return (
    <a
      href="https://wa.me/+917736612328"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg"
    >

      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsappChat;
