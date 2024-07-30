import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/react"
import '@/styles/social.css';
import '@/styles/Sidebar.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}