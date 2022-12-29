import {
  Home,
  Products,
  Product,
  ProductDetail,
  ProductsLayout,
  LogIn,
  Bag,
  Page404,
} from "./pages";


const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "store",
    element: <ProductsLayout />,
    children: [
      { index: true, element: <Products /> },
      {
        path: "product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "login",
    element: <LogIn />,
  },
  {
    path: "bag",
    element: <Bag />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export default routes;
