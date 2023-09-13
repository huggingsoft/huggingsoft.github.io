import React from "react";
import { DisplayMode, PaneDisplayMode } from "./Type";

export const NavigationViewContext = React.createContext({
  displayMode: DisplayMode.Small,
  paneDisplayMode: PaneDisplayMode.Auto,
});

export const NavigationViewItemContext = React.createContext(0);
