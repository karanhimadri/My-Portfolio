import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';
import './globals.css';
import 'highlight.js/styles/github-dark.css';

export const metadata = {
  title: 'Himadri Karan | Full-Stack Developer Portfolio',
  description: 'Explore projects, blogs, research papers, and the developer journey of Himadri Karan, a passionate full-stack developer and CSE student.',
  keywords: ['Himadri Karan', 'Full-Stack Developer', 'React Portfolio', 'Next.js Developer', 'CSE Student Projects', 'Web Developer India'],
  authors: [{ name: 'Himadri Karan' }],
  creator: 'Himadri Karan',
  metadataBase: new URL('https://iamhimadri.netlify.app'),
  openGraph: {
    title: 'Himadri Karan | Full-Stack Developer Portfolio',
    description: 'Explore real-time apps, AI tools, blogs, and research contributions by Himadri Karan.',
    url: 'https://iamhimadri.netlify.app',
    siteName: 'Himadri Karan Portfolio',
    images: [
      {
        url: './favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Himadri Karan Portfolio Cover',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 transition-colors">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
