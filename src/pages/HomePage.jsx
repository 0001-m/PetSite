import Navbar      from '../components/Navbar';
import Hero        from '../components/Hero';
import HowItWorks  from '../components/HowItWorks';
import FeaturedPets from '../components/FeaturedPets';
import Community   from '../components/Community';
import Footer      from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedPets />
        <Community />
      </main>
      <Footer />
    </>
  );
}