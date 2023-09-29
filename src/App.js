import { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import ProductCard from "./components/card/ProductCard";
import ProductPage from "./pages/ProductPage";
const HomePage = lazy( () => import("./pages/HomePage") );
const ElectronicsPage = lazy( () => import("./pages/ElectronicsPage") );
const Jewelery = lazy( () => import("./pages/Jewelery") );
const MensClothing = lazy( () => import("./pages/MensClothing") );
const WomensClothing = lazy( () => import("./pages/WomensClothing") );


function App() {
  return (
    <Fragment>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={ <HomePage /> } />
              <Route path="/:productsId" element={ <ProductPage /> }></Route>
              <Route path="electronics" element = { <ElectronicsPage /> }/>
              <Route path="jewerley" element={ <Jewelery /> } />
              <Route path="mensclothing" element={ <MensClothing /> }/>
              <Route path="womensclothing" element={ <WomensClothing /> }/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Fragment>
  );
}

export default App;
