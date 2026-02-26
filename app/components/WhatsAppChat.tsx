"use client";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/919643940236?text=Hello%2C%20I%27m%20interested%20in%20your%20art%20courses%20and%20would%20like%20to%20know%20about%20fees%2C%20timings%2C%20and%20enrollment%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-300">

        {/* Pulse Effect */}
        {/* <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span> */}

        {/* WhatsApp Icon (SVG) */}
        <svg
          className="w-8 h-8 text-white relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.83 11.83 0 0012.05 0C5.45 0 .11 5.34.11 11.94c0 2.11.55 4.17 1.6 5.99L0 24l6.24-1.63a11.86 11.86 0 005.81 1.49h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.19-1.24-6.19-3.48-8.44zM12.06 21.6a9.64 9.64 0 01-4.91-1.34l-.35-.21-3.7.97.99-3.61-.23-.37a9.63 9.63 0 01-1.48-5.13c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.02 1.01 6.85 2.83a9.63 9.63 0 012.84 6.86c0 5.35-4.35 9.69-9.7 9.69zm5.33-7.26c-.29-.14-1.71-.84-1.98-.94-.27-.1-.47-.14-.67.15-.2.29-.77.94-.95 1.13-.17.2-.35.22-.64.07-.29-.14-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.59.13-.13.29-.35.43-.52.14-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.14-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.29-1.05 1.03-1.05 2.52 0 1.49 1.07 2.93 1.22 3.13.14.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34z" />
        </svg>

      </div>
    </a>
  );
}