import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SpinnerExample from "./Components/Spinner";

const ReduxToolkitComponent = lazy(() =>
  import("./ReduxToolkit/ReduxComponent")
);

const ReduxComponent = lazy(() => import("./Redux/ReduxComponent"));
const CustomNavbar = lazy(() => import("./Components/CustomNavbar"));

const Home = lazy(() => import("./Components/Home"));
const UpdateProduct = lazy(() => import("./Components/UpdateProduct"));

const ProductDetails = lazy(() => import("./Components/ProductDetails"));
const AddProduct = lazy(() => import("./Components/addProduct"));
const Products = lazy(() => import("./Components/Products"));
const ProductLayout = lazy(() => import("./Components/ProductLayout"));
const NotFound = lazy(() => import("./Components/NotFound"));

const Cart = lazy(() => import("./Components/Cart"));

function App() {
  return (
    // <Fragement>
    <>
      {/* <Products/> */}
      <Suspense fallback={<SpinnerExample />}>
        <CustomNavbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/redux" element={<ReduxComponent />} />
          <Route path="/reduxtoolkit" element={<ReduxToolkitComponent />} />
          <Route path="/home/:username" element={<Home />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route path="list" element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="update/:id" element={<UpdateProduct />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </Suspense>
    </>
    // </Fragement>
  );
}

export default App;
