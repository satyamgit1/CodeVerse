// components/RecaptchaSetup.js
import { useEffect } from "react";
import { auth, RecaptchaVerifier } from "../firebaseConfig";

const RecaptchaSetup = () => {
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          console.log("reCAPTCHA solved:", response);
        }
      }, auth);
      window.recaptchaVerifier.render();
    }
  }, []);

  return <div id="recaptcha-container"></div>;
};

export default RecaptchaSetup;
