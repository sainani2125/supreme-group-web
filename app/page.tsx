import Layout from '@/components/Layout'
import HeroSection from '@/components/HeroSection'
import VehicleShowcase from '@/components/vehicleShowcase'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <VehicleShowcase />
      <ContactForm/>
      <Footer/>
    </Layout>
  )
}