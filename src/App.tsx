import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderHero from "./components/HeaderHero";

import Produits from "./pages/Produits";
import Solutions from "./pages/Solutions";
import Ressources from "./pages/Ressources";
import Partenaires from "./pages/Partenaires";
import Clients from "./pages/Clients";
import Apropos from "./pages/Apropos";
import Prix from "./pages/Prix";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderHero />

      <Routes>
        <Route path="/" element={<Navigate to="/produits" />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/partenaires" element={<Partenaires />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/prix" element={<Prix />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
