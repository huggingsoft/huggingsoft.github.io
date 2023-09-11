import React from "react";
import { DisplayMode, PaneDisplayMode } from "./NavigationViewType";

export const NavigationViewContext = React.createContext({
  filled: false,
  divided: false,
  darkened: false,
  animated: false,
  displayMode: DisplayMode.Small,
  paneDisplayMode: PaneDisplayMode.Auto,
});
