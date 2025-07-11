import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-[60%] min-w-[320px] mx-auto text-sm">
      <img src="/sip-it-dark-logo.svg" className="mt-24 w-[120px] h-[120px]" />
      <div className="text-center my-8">
        <strong>Who we are?</strong>
        <p className="mt-4">
          Never forget to hydrate again! Sip It is your personal water reminder
          and hydration tracker, designed to help you effortlessly build a
          healthy habit. Get smart, timely reminders, track your daily intake
          with a single tap, and feel your best every day. Your journey to
          better hydration starts with a single sip!
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center my-8">
        <p>
          This app is developed by{" "}
          <a
            href="https://medicsewa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 font-medium underline"
          >
            Medic Sewa Pvt. Ltd.
          </a>
          . We are committed to providing you with the best experience possible.
        </p>
      </div>
      <div className="h-[1px] bg-gray-100 w-full" />
      <div className="text-center py-8">
        <strong>Contact Us</strong>
        <p className="mt-4">
          If you have anything to ask please feel free to contact us here:
          <br />
          <span className="italic underline text-sky-700 font-medium">
            info@medicsewa.com
          </span>
        </p>
        <nav className="flex items-center justify-center gap-2 mt-8">
          <Link to="/terms-and-conditions" className="hover:underline">
            Terms &amp; Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
