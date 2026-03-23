import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { SportsPage } from "./pages/SportsPage";
import { ArticlePage } from "./pages/ArticlePage";
import { SportsArticlePage } from "./pages/SportsArticlePage";
import { ObituariesPage } from "./pages/ObituariesPage";
import { ObituaryDetailPage } from "./pages/ObituaryDetailPage";
import { WeatherPage } from "./pages/WeatherPage";
import { RadioPage } from "./pages/RadioPage";
import { RadioStationPage } from "./pages/RadioStationPage";
import { PodcastsPage } from "./pages/PodcastsPage";
import { PodcastPlayerPage } from "./pages/PodcastPlayerPage";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/sports",
    Component: SportsPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/article/:id",
    Component: ArticlePage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/sports/article/:id",
    Component: SportsArticlePage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/obituaries",
    Component: ObituariesPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/obituaries/:id",
    Component: ObituaryDetailPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/weather",
    Component: WeatherPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/radio",
    Component: RadioPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/radio/:id",
    Component: RadioStationPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/podcasts",
    Component: PodcastsPage,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/podcasts/player/:id",
    Component: PodcastPlayerPage,
    errorElement: <ErrorBoundary />,
  },
]);