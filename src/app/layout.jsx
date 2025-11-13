import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  icons: [
    { rel: 'icon', url: '/icon.png', sizes: '200x300', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/icon.png', sizes: '180x180' }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
