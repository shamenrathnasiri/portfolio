import './globals.css'
import Navbar from '../app/components/Navbar'
import Footer from './components/Footer'

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
