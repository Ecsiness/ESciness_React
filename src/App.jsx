import { RouterProvider } from "react-router-dom";
import AppRouter from "./routers";

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
