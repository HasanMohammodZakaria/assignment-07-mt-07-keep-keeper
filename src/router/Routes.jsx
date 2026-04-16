import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLinePage/TimeLine";
import Stats from "../pages/StatsPage/Stats";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
       index:true,
       Component: HomePage,
      },
      {
        path:"homepage/:id",
        Component: FriendDetails,
      },
      {
       path:"/timeline",
       Component: TimeLine,
      },
      {
       path:"/stats",
       Component: Stats,
      },
    ],
    errorElement: <NotFoundPage />
  },
]);