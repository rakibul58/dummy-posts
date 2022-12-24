const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: About } = require("../Pages/About/About");
const { default: Home } = require("../Pages/Home/Home");
const { default: Post } = require("../Pages/Post/Post");

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/posts/:id',
                element: <Post/>
            },
            {
                path: '/about',
                element: <About/> 
            }
        ]
    }
]);

export default route;