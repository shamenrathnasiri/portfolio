import './globals.css'
import Navbar from '../app/components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
