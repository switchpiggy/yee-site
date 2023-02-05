import Head from 'next/head';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});
export default function Home() {
  return (
    <>
      <Head>
        <title>Shoutouts App</title>
        <meta name="description" content="Send a shoutout to your friends, coworkers, and community. Build strong communities and positive workplace culture by spreading gratitude." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${open_sans.variable} font-sans h-screen flex flex-col justify-evenly`}>
        <div className={`flex items-center justify-evenly flex-row`}>
          <div className={`flex flex-1 flex-row items-center text-4xl pl-10 p-5`}>
            <h1 className={``}>Shoutouts</h1>
          </div>
          <div className={`flex flex-1 flex-row justify-end items-center text-gray-600 p-5`}>
          <h1 className={`p-3`}>Help</h1>
            <h1 className={`p-3`}>Contact Us</h1>
            <h1 className={`p-3`}>Terms</h1>
            <Link href="/privacy">
              <h1 className={`p-3`}>Privacy Policy</h1>
            </Link>
          </div>
        </div>

        <div className={`flex-1 bg-zinc-900 flex flex-grow text-white flex-col w-full`}>
          <h1 className={`text-7xl p-10`}>Empowering gratitude.</h1>
          <h2 className={`text-2xl pl-10 pr-10 pb-10`}>Send a shoutout to your friends, coworkers, and community.<br/>
            Build strong communities and positive workplace culture by spreading gratitude.</h2>
          <button className={`bg-sky-600 text-zinc-900 w-1/3 ml-10 mt-20 p-10 rounded-xl`} 
            onClick={() => {document.location.href='https://testflight.apple.com/join/eLr6tD84'}}>
              <h1 className={`text-3xl`}>Join Shoutouts Open Beta</h1>
          </button>
        </div>

        <div className={`flex justify-center items-center flex-row`}>
        </div>
      </main>
    </>
  )
}
