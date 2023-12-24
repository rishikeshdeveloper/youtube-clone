import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./component/Container";
import WatchPage from "./component/WatchPage";
import Sidebar from "./component/Sidebar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Container /> },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Sidebar />
        <RouterProvider router={appRouter} />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
