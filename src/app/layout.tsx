import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'

export const metadata: Metadata = {
    title: 'Onmine',
    description: 'Learning',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={`bg-gray-[10] `}>
                <Header />
                {children}
            </body>
        </html>
    )
}
