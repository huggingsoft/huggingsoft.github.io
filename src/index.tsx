import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles } from "@fluentui/react";
import reportWebVitals from "./reportWebVitals";
import { NavigationView } from "./components/navigation-view/NavigationView";
import { NavigationViewRoutes } from "./router/routes";
import { PaneDisplayMode } from "./components/navigation-view/common/Type";
import { BrowserRouter } from "react-router-dom";

// Inject some global styles
mergeStyles({
  ":global(body,html,#root)": {
    margin: 0,
    padding: 0,
    height: "100vh",
  },
});

const EntryView: React.FunctionComponent = () => {
  const [paneDisplayMode, setPaneDisplayMode] = React.useState(
    PaneDisplayMode.Auto
  );
  const handlePaneDisplayModeChange = (event: any) => {
    const selectedMode = event.target.value;
    setPaneDisplayMode(selectedMode);
  };

  const classes = mergeStyles({
    position: "absolute",
    top:  "0",
    right: "50%",
  });
  return (
    <>
      <NavigationView
        paneDisplayMode={paneDisplayMode}
        menuItems={NavigationViewRoutes}
      />
      <select
        className={classes}
        title="PaneDisplayMode"
        onChange={handlePaneDisplayModeChange}
      >
        <option value={PaneDisplayMode.Auto}>Auto</option>
        <option value={PaneDisplayMode.Left}>Left</option>
        <option value={PaneDisplayMode.LeftCompact}>LeftCompact</option>
        <option value={PaneDisplayMode.LeftMinimal}>LeftMinimal</option>
        <option value={PaneDisplayMode.Top}>Top</option>
      </select>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <EntryView />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
