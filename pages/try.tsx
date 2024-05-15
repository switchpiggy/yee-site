import Head from 'next/head';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';
import { FormEvent } from 'react';
import { type } from 'os';

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});

type data = {[key:string]:any}

export default function Privacy() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const SERVER_URL = 'http://127.0.0.1:8000/sim/';
      const formData = new FormData(event.currentTarget)
      const simD = document.getElementById('simD');

      if(simD == null) {
        throw Error('SimD is null.');
      }

      var data_obj: data = {}
      formData.forEach(function(value, key){
          data_obj[key] = value;
      });
      var json = JSON.stringify(data_obj);

      simD.innerHTML = "<h2 className={`text-xl text-white`}>Loading...</h1>"

      await fetch(SERVER_URL, {
        method: 'POST',
        body: json,
      }).then(response => {
        console.log(response.status)
        if(response.status != 200) {
          console.log(response.status)
          simD.innerHTML = "<p>Internal Server Error: Please try again.</p>"
          return 
        }

      // console.log(imageStr)
      let image = new Image();
      response.text().then(imageStr => {
        let image = new Image();
        image.src = imageStr;
        simD.innerHTML = "";
        simD.appendChild(image);
      })
      }).catch(error => {
        console.error(error)
      })
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } 
  }

  return (
    <>
      <Head>
        <title>Info</title>
        <meta name="description" content="Open source EM field simulation software" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <div className={`flex-1 bg-zinc-900 flex flex-grow text-white flex-col w-full`}>
            <h1 className={`text-4xl p-10`}>Showcasing the Potential of FDTD</h1>
            <p className={'text-xl pl-10'}>Here explanation!</p>
            <form id="config-form" className={'flex p-10 m-10 bg-zinc-300 flex-col'} onSubmit={onSubmit}>
              <h2 className={`text-black text-4xl pb-5`}>Configuration</h2>
              <div className={`flex flex-1 text-black justify-evenly`}>
                  <div className={`flex-1`}>
                    <input type="range" name="X" min="1" max="50" step="1"/>
                    <label htmlFor='X' className='p-3'>X-Dimension</label>
                  </div>
                  <div className={`flex-1`}>
                    <input type="range" name="Y" min="1" max="50" step="1"/>
                    <label htmlFor='Y' className='p-3'>Y-Dimension</label>
                  </div>
                  <div className={`flex-1`}>
                    <input type="range" name="Z" min="1" max="50" step="1"/>
                    <label htmlFor='Z' className='p-3'>Z-Dimension</label>
                  </div>
              </div>
              <div className={`flex flex-1 text-black justify-evenly pt-5`}>
                <div className={`flex-1 justify-center`}>
                  <input type="range" name="maxTime" min="1" max="50" step="1"/>
                  <label htmlFor='maxTime' className='p-3'>Simulation Time</label>
                </div>
              </div>
              <div>
                <button className={`bg-sky-600 pl-10 pr-10 pb-3 pt-3 mt-5 rounded-xl`} 
            type='submit'>
                  <h1 className={`text-2xl text-white`}>Run FDTD</h1>
                </button>
              </div>
            </form>
        </div>
        <div className = {`bg-zinc-900 text-white pb-10 pl-10`}>
          <h1 className={`text-3xl`}>
            Results (GIF will appear below)
          </h1>
        </div>
        <div id="simD" className={`bg-zinc-900 pb-10 pl-10 justify-center`}>
          <p className={`text-xl text-zinc-300`}>Click run to generate a simulation gif</p>
        </div>
      </main>
    </>
  )
}
