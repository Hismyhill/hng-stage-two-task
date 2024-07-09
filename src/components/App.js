import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import Main from "./Main";
// import NavBar from "./NavBar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import RootLayout from "../layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<Cart />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
