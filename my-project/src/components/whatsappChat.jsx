import React from "react";
import whatsappIcon from "../assets/whatsapp.png";  // Ensure you have the correct path to the WhatsApp icon

const whatsappChat = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
    >

      <img
        src={whatsappIcon}
        alt="WhatsApp Icon"
        className="w-8 h-8"
      />
    </a>
  );
};

export default whatsappChat;
