import Head from 'next/head';
import Image from 'next/image';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});
export default function Info() {
  return (
    <>
      <Head>
        <title>Yee's Algorithm</title>
        {/* <meta name="description" content="Send a shoutout to your friends, coworkers, and community. Build strong communities and positive workplace culture by spreading gratitude." /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={`${open_sans.variable} font-sans flex flex-col justify-evenly`}>
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
              <h1 className='p-3'>Try!</h1>
            </Link>
          </div>
        </div>
        <div className={`flex-1 bg-zinc-900 flex flex-grow text-white flex-col w-full pb-10`}>
            <h1 className={`p-10 text-4xl`}>About this project</h1>
            <p className={`pl-10 text-xl`}>This is my electromagnetic field simulation. The purpose of this project is to create an open source software for simulating the evolution of EM fields in a 3D space. My project is essentially an implementation of the FDTD (Finite Difference Time Domain) algorithm, also known as Yee’s Algorithm, in Python. 
The software’s underlying FDTD algorithm works by first discretizing the 3D space into a lattice grid. In order to calculate all the values of the E fields as well as the B fields on a single grid, the values of the fields are calculated at staggered intervals on the “staggered grid”. For example, take a look at this diagram of a 3D implementation of the Yee grid: 
  <img src='https://iili.io/Jh6yUsj.md.png' className={`p-10`}></img>
	In order to actually calculate and update the field values in the grid, discretized versions of Maxwell's equations are used. In particular, the laws in use are the Ampere-Maxwell Law and Faraday’s Law. Essentially, what discretization does is turn the calculus problem of solving differential equations into an algebra problem by approximating the derivatives using discrete differences. These laws relate the time evolution of the E field to the spatial differentials of the B field and vice versa. Looking back at the strange idea of using the staggered grid, we can see that the particular update equations make the staggered grid quite useful in practice. Below is an example of the discretized Faraday’s Law in 3D (the superscripts indicate the time dimension and the variables in the square brackets represent the spatial dimensions):
  <img src='https://i.ibb.co/mGQ80Jp/unnamed.png' className={`p-10`}></img>


</p>
        </div>
      </main>
    </>
  )
}
