import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Service from './components/Service';
import ClientsSection from './components/ClientsSection';
import ImpactSection from './components/ImpactSection';
import Section from './components/Section';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    console.log('Loading finished');
    setIsLoading(false); // This will trigger the change to hide the loading screen and show the main content
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onFinish={handleFinishLoading} />
      ) : (
        <>
          <Navbar />
          <MainSection />
          <Service />
          <ClientsSection />
          <Section />
          <ImpactSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
