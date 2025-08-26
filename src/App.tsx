import { Footer, Header } from "compositions";
import { AllProviders } from "data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Demo } from "./examples/Demo";
import { FAQs } from "./examples/FAQs";
import { PanelSections } from "./examples/PanelSections";
import { PricingGrid } from "./examples/PricingGrid";
import { ProductDetails } from "./examples/ProductDetails";
import { ProductGrid } from "./examples/ProductGrid";
import { WelcomeHero } from "./examples/WelcomeHero";
import { Wireframe } from "./examples/Wireframe";

function Home() {
  return (
    <>
      <Demo />
      <WelcomeHero />
      <PanelSections />
      <PricingGrid />
      <FAQs />
      <ProductDetails />
      <ProductGrid />
    </>
  );
}

function App() {
  return (
    <AllProviders>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wireframe" element={<Wireframe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AllProviders>
  );
}

export default App;
