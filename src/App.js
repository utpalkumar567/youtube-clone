import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./Components/Maincontainer";
import Gaming from "./Components/Gaming";
import Sports from "./Components/Sports";
import Music from "./Components/Music";
import Watchpageconatiner from "./Components/Watchpageconatiner";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "watch",
          element: <Watchpageconatiner />,
        },
        {
          path: "gaming",
          element: <Gaming />,
        },
        {
          path: "sports",
          element: <Sports />,
        },
        {
          path: "music",
          element: <Music />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
