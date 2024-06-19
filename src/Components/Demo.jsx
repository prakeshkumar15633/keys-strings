import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout";
import ErrorRoute from "./ErrorRoute";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs/ContactUs";
import Services from "./Services/Services";
import ServicePage from "./Services/Service";

function Demo() {
    let router = createBrowserRouter([
        {
            path: 'keys-strings',
            element: <RootLayout />,
            errorElement: <ErrorRoute />,
            children:[
                {
                    path:'home',
                    element:<Home/>
                },
                {
                    path:'aboutus',
                    element:<AboutUs/>,
                    
                },
                {
                    path:'gallery',
                    element:<Gallery/>,
                    
                },
                {
                    path:'services',
                    element:<Services/>,
                    children:[
                        {
                            path:'explore',
                            element:<ServicePage/>
                        }
                    ]
                },
                {
                    path:'contactus',
                    element:<ContactUs/>
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Demo