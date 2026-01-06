import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

// Header
// Body
// SideBar
//  MenuItems
// MainContainer
//  ButtonList
//  VideoContainer
//    VideoCard

const appRouter = createBrowserRouter([
  {
    path: "/youtubeclone",
    element: <Body />,
    children: [
      {
        path: "/youtubeclone",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
