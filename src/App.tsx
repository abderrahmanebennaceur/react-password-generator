import FAQSection from './components/FAQ'
import FeaturesSection from './components/Features'
import Footer from './components/Footer'
import PasswordGenerator from './components/PasswordGenerator'

const App = () => {
  return (
    <main>
      <PasswordGenerator />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </main>
  )
}

export default App