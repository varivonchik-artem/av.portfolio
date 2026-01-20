import { ErrorBoundaryFallback } from "@app/providers/ErrorBoundary";
import { RouteObject, Outlet } from "react-router-dom";
import { MainPage } from "@/pages/MainPage";
import { Header } from "@widgets/Header";

export const routeConfiguration: RouteObject[] = [
  {
    element: (
      <>
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </>
    ),
    errorElement: <ErrorBoundaryFallback />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
];