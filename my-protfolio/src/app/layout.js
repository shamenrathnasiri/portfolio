import './globals.css'
import Navbar from '../app/components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main >{children}</main>
      </body>
    </html>
  )
}
