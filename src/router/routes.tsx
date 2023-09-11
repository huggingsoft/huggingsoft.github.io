import { NavigationViewItem } from "../component/navigation-view/ts/NavigationViewType";
import { App } from "../page/app/App";

export const NavigationViewRoutes: Array<NavigationViewItem> = [
  {
    text: "App",
    path: "/",
    subtext: "React App",
    component: App,
  },
];
