import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Mainlayout from "./Mainlayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, About, Publications, PublicationSingle, Contact} from './pages'
import {createTheme, ThemeProvider} from "@mui/material";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout/>,
        // errorElement:<Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },

            {
                path: '/publications',
                element: <Publications/>
            },
            {
                path: '/publications/:PID',
                element: <PublicationSingle/>
            },

            {
                path: '/contact',
                element: <Contact/>
            },


        ],

    }

])


const theme = createTheme({
        palette: {
            primary: {
                main: '#00582a'
            },
            secondary: {
                main: 'rgba(51,102,89,0.85)'
            },
            third: {
                main: '#393E46',
                contrastText: '#fff'


            },
            fourth: {
                main: 'rgba(179,153,87,0.9)',
                contrastText: '#ffffff'

            }


        },
        typography: {
            fontFamily: 'yekan',

        }
    })
;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>


            <RouterProvider router={router}>

                <Mainlayout/>

            </RouterProvider>
        </ThemeProvider>

    </StrictMode>,
)
