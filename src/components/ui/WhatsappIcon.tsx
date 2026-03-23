import WPIcon from "../../assets/svg/whatsapp-logo.svg";
import { WHATSAPP_LINK } from "../../utils/constants";

export default function WhatsappIcon() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={WPIcon}
        alt="Chat on WhatsApp"
        className="fixed z-9999 right-[2%] bottom-[2%] w-12.5 h-12.5"
      />
    </a>
  );
}
