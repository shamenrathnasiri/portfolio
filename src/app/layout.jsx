import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  icons: [
    { rel: 'icon', url: '/icon.png', sizes: '200x300', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/icon.png', sizes: '180x180' }
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    viewportFit: 'cover',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
