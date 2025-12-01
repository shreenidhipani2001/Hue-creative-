import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventsCarousel from '@/components/EventsCarousel';
import ClientsScroller from '@/components/ClientsScroller';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <EventsCarousel />
      <ClientsScroller />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
