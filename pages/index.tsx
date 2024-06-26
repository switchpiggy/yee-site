import Head from 'next/head';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});
export default function Home() {
  return (
    <>
      <Head>
        <title>Yee's Algorithm</title>
        {/* <meta name="description" content="Send a shoutout to your friends, coworkers, and community. Build strong communities and positive workplace culture by spreading gratitude." /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={`${open_sans.variable} font-sans flex flex-col h-screen justify-evenly`}>
        <div className={`flex items-center justify-evenly flex-row`}>
          <div className={`flex flex-1 flex-row items-center text-4xl pl-10 p-5`}>
            <h1 className={``}>FDTD in Python</h1>
          </div>
          <div className={`flex flex-1 flex-row justify-end items-center text-gray-600 p-5`}>
            <Link href='/'>
              <h1 className='p-3'>Home</h1>
            </Link>
            <Link href='/info'>
              <h1 className='p-3'>Info</h1>
            </Link>
            <Link href='/try'>
              <h1 className='p-3'>Try</h1>
            </Link>
          </div>
        </div>

        <div className={`flex-1 bg-zinc-900 flex flex-grow text-white flex-col w-full`}>
          <h1 className={`text-7xl p-10`}>Open source EM field simulation software in Python.</h1>
          <h2 className={`text-2xl pl-10`}>Our implementation of Yee's Algorithm is efficient, stable, and adaptable to a wide variety of systems.</h2>
        </div>
        <div className={`flex justify-center items-center flex-row bg-zinc-900`}>
          <button className={`bg-sky-600 w-1/3 m-10 p-10 rounded-xl`} 
            onClick={() => {document.location.href='https://github.com/switchpiggy/yee-algorithm'}}>
              <h1 className={`text-3xl text-white`}>Source Code</h1>
          </button>
          <button className={`bg-sky-600 w-1/3 m-10 p-10 rounded-xl`} 
            onClick={() => {document.location.href='/try'}}>
              <h1 className={`text-3xl text-white`}>Try a Simulation!</h1>
          </button>
          <button className={`bg-sky-600 w-1/3 m-10 p-10 rounded-xl`} 
            onClick={() => {document.location.href='/info'}}>
              <h1 className={`text-3xl text-white`}>More on FDTD</h1>
          </button>
        </div>
      </main>
    </>
  )
}
