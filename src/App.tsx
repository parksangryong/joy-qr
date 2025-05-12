import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Qrpage from "./pages/Qrpage";
import ResultPage from "./pages/ResultPage";
import SchedulePage from "./pages/SchedulePage";
import ScheduleAdminPage from "./pages/ScheduleAdminPage";
import NoticePage from "./pages/NoticePage";

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
      element: <NoticePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:type/:id",
      element: <Qrpage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/result/:type/chord",
      element: <ResultPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/schedule",
      element: <SchedulePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/schedule/admin",
      element: <ScheduleAdminPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
