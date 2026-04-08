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
import { SearchPage } from "./pages/SearchPage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { RootLayout } from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    errorElement: <ErrorBoundary />,
    children: [
      { path: "/", Component: HomePage },
      { path: "/search", Component: SearchPage },
      { path: "/sports", Component: SportsPage },
      { path: "/article/:id", Component: ArticlePage },
      { path: "/sports/article/:id", Component: SportsArticlePage },
      { path: "/obituaries", Component: ObituariesPage },
      { path: "/obituaries/:id", Component: ObituaryDetailPage },
      { path: "/weather", Component: WeatherPage },
      { path: "/radio", Component: RadioPage },
      { path: "/radio/:id", Component: RadioStationPage },
      { path: "/podcasts", Component: PodcastsPage },
      { path: "/podcasts/player/:id", Component: PodcastPlayerPage },
    ],
  },
], { basename: '/Newsappheader' });
