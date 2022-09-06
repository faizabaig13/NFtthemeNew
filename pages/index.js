import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Headers'
import About from '../pages/about'
import ProfileCards from '../components/ProfileCards'
import CardsCarousel from '../components/CardCaousel'
import SecondCardsContainer from '../components/secondCardsContainer'
export const config = {
  unstable_runtimeJS : false
}

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Website</title>
        <meta name="description" content="Generated by create next app" />
        
        <link rel="icon" href="/logo.png" />
     
      </Head>

     <Navbar/>
     <Header/>
     <About/>
     <ProfileCards/>
     <SecondCardsContainer />
     <CardsCarousel/>
     <Footer />

     </div>
  )
}
