import { FaWhatsapp } from "react-icons/fa";
import "../Styles/WhatsappIcon.css"; // import css file

export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/919790550429"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      <FaWhatsapp className="whatsapp-icon" />
      Chat on WhatsApp
    </a>
  );
}
