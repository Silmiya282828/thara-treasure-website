import BagDrawer from './components/BagDrawer.jsx';
import Categories from './components/Categories.jsx';
import { Cuffs, Sithaara, Watches } from './components/Collections.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductModal from './components/ProductModal.jsx';
import SavedDrawer from './components/SavedDrawer.jsx';
import Story from './components/Story.jsx';
import TharaYou from './components/TharaYou.jsx';
import { useShop } from './store/shop.jsx';

export default function App() {
  const { overlay, close } = useShop();

  return (
    <>
      <div className="ann">
        Handpicked <span>◆</span> Hypoallergenic <span>◆</span> Tarnish-free <span>◆</span> Ships
        across India
      </div>

      <Header />

      <main id="top">
        <Hero />
        <Categories />
        <Sithaara />
        <Watches />
        <Cuffs />
        <TharaYou />
        <Story />
      </main>

      <Footer />

      <div className={`scrim${overlay ? ' on' : ''}`} onClick={close} />
      <BagDrawer />
      <SavedDrawer />
      <ProductModal />
    </>
  );
}
