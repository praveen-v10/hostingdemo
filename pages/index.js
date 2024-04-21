import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hosting Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

<main>
  <div>
    <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?t=st=1713693359~exp=1713696959~hmac=2a42b478ebd3e338bf5ac13dff1c93f7e6637c0e40476f190a54b25a2b19d57b&w=740' className='h-screen w-full'/>
  </div>
</main>

    </>
  )
}
