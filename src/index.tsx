import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles } from "@fluentui/react";
import reportWebVitals from "./reportWebVitals";
import { NavigationView } from "./component/navigation-view/NavigationView";
import { NavigationViewRoutes } from "./router/routes";
import { PaneDisplayMode } from "./component/navigation-view/ts/NavigationViewType";
import { BrowserRouter } from "react-router-dom";

// Inject some global styles
mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

ReactDOM.render(
  <BrowserRouter>
    <NavigationView
      divided={true}
      paneDisplayMode={PaneDisplayMode.Auto}
      paneContent={NavigationViewRoutes}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
