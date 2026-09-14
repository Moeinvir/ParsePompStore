import Hero from '../components/home/Hero'
import FeatureHighlights from '../components/home/FeatureHighlights'
import ServicesSection from '../components/home/ServicesSection'
import ProductsSection from '../components/home/ProductsSection'
import WhyUsSection from '../components/home/WhyUsSection'

export default function Home() {
  return (
    <>
      <main className="mt-16 md:mt-0">
        <Hero />
        <FeatureHighlights />
      </main>
      <ServicesSection />
      <ProductsSection />
      <WhyUsSection />
    </>
  )
}
