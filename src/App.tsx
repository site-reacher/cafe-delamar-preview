import { useRouter } from './router';
import Nav from './components/Nav';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import SpecialsPage from './pages/SpecialsPage';
import CateringPage from './pages/CateringPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const { route, navigate } = useRouter();

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'menu':
        return <MenuPage onNavigate={navigate} />;
      case 'specials':
        return <SpecialsPage onNavigate={navigate} />;
      case 'catering':
        return <CateringPage onNavigate={navigate} />;
      case 'location':
        return <LocationPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <NotFoundPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Nav currentRoute={route} onNavigate={navigate} />
      <main className="pb-14 lg:pb-0">{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <StickyBar onNavigate={navigate} />
    </div>
  );
}
