import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zuhaib Hussain Butt - AI Expert & Data Science Freelancer | Gujranwala, Pakistan',
  description: 'Top-rated AI, Data Science & Computer Vision Expert on Fiverr. Specializing in LLMs, RAG, NLP, Computer Vision, BI Engineering, Factory Automation, n8n, and Data Scraping. Based in Gujranwala, Pakistan. Available for freelance projects worldwide. Serving clients from USA, UK, Germany, European Union, Africa, Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and all Gulf countries.',
  keywords: 'AI expert, data science expert, computer vision expert, NLP expert, BI engineer, factory automation, n8n automation, data scraping, zuhaib hussain butt, zuhaib butt, gujranwala data scientist, gujranwala data analytics, fiverr data science expert, machine learning consultant, big data engineer, RAG developer, LLM engineer, Power BI dashboards, data automation, AI application expert, Pakistan AI expert, freelance data scientist Pakistan, European AI consultant, USA data science freelancer, UK machine learning expert, German AI engineer, African data scientist, Dubai AI consultant, Gulf countries data expert, Middle East AI specialist, European Union data science, American AI consultant, British machine learning expert, German data analytics, African tech consultant, UAE AI expert, Saudi Arabia data scientist, Qatar AI consultant, Kuwait data expert, Bahrain tech specialist, Oman AI consultant, European tech consultant, American data science expert, British AI consultant, German machine learning expert, African data analytics, Middle Eastern AI specialist, Gulf tech consultant, European Union tech expert, USA machine learning consultant, UK data science expert, German AI consultant, African machine learning expert, Dubai data scientist, Gulf countries tech consultant, Middle East data science expert, European AI engineer, American machine learning expert, British data analytics, German tech consultant, African AI specialist, UAE data scientist, Saudi Arabia AI consultant, Qatar tech expert, Kuwait AI specialist, Bahrain data consultant, Oman tech expert, European data science consultant, USA AI engineer, UK machine learning consultant, German data science expert, African tech engineer, Middle Eastern data consultant, Gulf AI engineer, European Union machine learning, USA data analytics expert, UK AI consultant, German tech specialist, African data science engineer, Dubai machine learning expert, Gulf countries data consultant, Middle East tech engineer, European machine learning consultant, American data science engineer, British AI specialist, German tech engineer, African machine learning consultant, UAE data analytics expert, Saudi Arabia tech consultant, Qatar AI engineer, Kuwait data science specialist, Bahrain machine learning consultant, Oman AI engineer, European tech engineer, American machine learning specialist, British data science engineer, German AI specialist, African tech consultant, Middle Eastern machine learning engineer, Gulf data science specialist, European Union AI engineer, USA tech consultant, UK data science engineer, German machine learning specialist, African AI engineer, Dubai tech consultant, Gulf countries machine learning engineer, Middle East data science specialist, European data analytics engineer, American AI engineer, British tech specialist, German data science engineer, African machine learning specialist, UAE tech engineer, Saudi Arabia data science consultant, Qatar machine learning engineer, Kuwait AI specialist, Bahrain data science engineer, Oman machine learning specialist',
  authors: [{ name: 'Zuhaib Hussain Butt' }],
  openGraph: {
    title: 'Zuhaib Hussain Butt — AI & Data Science Expert | Gujranwala, Pakistan',
    description: 'Leading AI, Data Science & Computer Vision Expert. Specializing in LLMs, RAG, NLP, Computer Vision, BI Engineering, Factory Automation, and Data Scraping. Based in Gujranwala, Pakistan. Serving clients from USA, UK, Germany, European Union, Africa, Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and all Gulf countries.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Zuhaib Hussain Butt - AI Expert',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Zuhaib Hussain Butt - AI & Data Science Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zuhaib Hussain Butt — AI & Data Science Expert',
    description: 'Top AI, Data Science & Computer Vision Expert from Gujranwala, Pakistan. Available for freelance projects worldwide. Serving clients from USA, UK, Germany, European Union, Africa, Dubai, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and all Gulf countries.',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://zuhaib-hussain-butt.github.io/resume/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zuhaib AI Expert" />
        <link rel="apple-touch-icon" href="/profile.png" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
