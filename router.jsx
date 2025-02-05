import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Contact from "./src/components/Pages/Contact";
import Services from "./src/components/Pages/Services";
import Gallery from "./src/components/Pages/Gallery";
import Home from "./src/components/Pages/Home";
import About from "./src/components/Pages/About/About";
import DirectorMessage from "./src/components/Pages/About/DirectorMessage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>,
      },
      //   { path: "about/message", element: <DirectorMessage /> }
      {
          path: "about/message",
          element: <DirectorMessage/>
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      // service router 
      {
        path: "/service/1",
        element: <Services />,
      },
     


    ],
  },
]);

export default router;
