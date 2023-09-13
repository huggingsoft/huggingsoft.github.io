import { NavigationViewItemType } from "../components/navigation-view/common/Type";
import { App } from "../page/app/App";

export const NavigationViewRoutes: Array<NavigationViewItemType> = [
  {
    text: "App",
    path: "/",
    subtext: "React App",
    component: App,
  },
];
