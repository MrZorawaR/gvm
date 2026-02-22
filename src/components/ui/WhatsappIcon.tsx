import WPIcon from "../../assets/svg/whatsapp-logo.svg";

export default function WhatsappIcon() {
  return (
    <a
      href="https://wa.me/919996648317?text=Hello%20I%20need%20more%20information"
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
