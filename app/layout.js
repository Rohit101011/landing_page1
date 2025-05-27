import './globals.css'

export const metadata = {
  title: 'Empire Details - Professional Barber Shop',
  description: 'Professional barber shop in Watauga, TX providing premium grooming services.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 