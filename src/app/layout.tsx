import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Resurface Cloud | Own your cloud!',
  description:
    "Resurface is an infrastructure as code platform that helps you own your cloud. It's a cloud-native platform that helps you manage your cloud infrastructure.",
  metadataBase: new URL('https://resurface.cloud'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    images: '/opengraph-image.jpg',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'Resurface',
    'Resurface Cloud',
    'Resurface Cloud Platform',
    'Resurface Cloud Infrastructure',
    'Resurface Cloud Management',
    'Resurface Cloud Automation',
    'Resurface Cloud Orchestration',
    'VPS management',
    'Self-hosted cloud',
    'Self-hosted cloud platform',
    'Self hosting',
    'Self-hosted cloud infrastructure',
    'Coolify alternatives',
    'Services like Coolify',
    'Coolify alternatives for self-hosting',
    'Self host on a vps',
    'One click deploy vps',
    'One click deploy cloud',
    'One click deploy cloud infrastructure',
    'One click deploy',
  ],
  category: 'Cloud',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <body className='flex flex-col min-h-screen'>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
