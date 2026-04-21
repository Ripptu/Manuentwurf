/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AblaufKosten from "./pages/AblaufKosten";
import Karriere from "./pages/Karriere";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="standorte" element={<PlaceholderPage title="Standorte" />} />
          <Route path="leistungen" element={<PlaceholderPage title="Leistungen" />} />
          <Route path="ablauf-kosten" element={<AblaufKosten />} />
          <Route path="karriere" element={<Karriere />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
