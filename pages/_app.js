// pages/_app.js

import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/react"
import '@/styles/social.css';
import '@/styles/Sidebar.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react'; // Import useEffect from React

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in ms
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
