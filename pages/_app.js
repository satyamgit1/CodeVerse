// pages/_app.js

import '../styles/globals.css'; // Adjusted path
import { Analytics } from "@vercel/analytics/react";
import '../styles/social.css';
import '../styles/Sidebar.css';

import 'aos/dist/aos.css'; // Ensure this is in _app.js
import AOS from 'aos';
import { useEffect } from 'react'; // Import useEffect from React
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider from next-themes

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in ms
    });
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
