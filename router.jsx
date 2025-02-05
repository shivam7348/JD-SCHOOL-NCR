import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Contact from "./src/components/Pages/Contact";
import Services from "./src/components/Pages/Services";
import Gallery from "./src/components/Pages/Gallery";
import Home from "./src/components/Pages/Home";
import About from "./src/components/Pages/About/About";
import DirectorMessage from "./src/components/Pages/About/DirectorMessage";
import Vission from "./src/components/Pages/About/Vission";
import Mission from "./src/components/Pages/About/Mission";
import Admission from "./src/components/Pages/About/Admission";
import AcademicZone from "./src/components/Pages/AcedmicZone/AcademicZone";



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
      { path: "/about/vision", element: <Vission/>},
      { path: "/about/mission", element: <Mission/>},
      {
        path: "admission",
        element: <Admission/>
      },
      {
        path: "academic-zone",
        element: <AcademicZone/>
      },
      // acdemice nested routes 
      {},
      {},
      {},
      {},
      {
        path: "sessioni-info",
        element: 
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
