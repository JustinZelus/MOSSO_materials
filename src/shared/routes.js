import Home from "./components/Home";
import ImgaePost from "./components/ImgaePost";
// import Old_Ticket from "./components/Old_Ticket";
import Ticket from "./components/Ticket";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/detail/:detailId/:name",
    component: ImgaePost,
    exact: true
  },
  {
    path: "/ticket",
    component: Ticket
  }
];

export default routes;
