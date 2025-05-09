import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Qrpage from "./pages/Qrpage";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">페이지를 찾을 수 없습니다.</p>
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="home">Hello my name is Qrpage</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:type",
      element: <Qrpage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
