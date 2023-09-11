import React from "react";

import { useMediaQuery } from "react-responsive";
import { NavigationViewBody } from "./NavigationViewBody";
import { NavigationViewPane } from "./NavigationViewPane";
import {
  NavigationViewPage,
  NavigationViewPageContent,
  NavigationViewPageHeader,
} from "./NavigationViewPage";
import { NavigationViewContext } from "./ts/NavigationViewProvider";
import {
  PaneDisplayMode,
  NavigationViewItem,
  ThresholdWidth,
  DisplayMode,
} from "./ts/NavigationViewType";

export type _NavigationView = {
  filled?: boolean;
  divided?: boolean;
  paneDisplayMode?: PaneDisplayMode;
  paneHeader?: string | React.ReactNode;
  paneContent: Array<NavigationViewItem>;
  paneFooter?: Array<NavigationViewItem>;
  compactModePaneWidth?: number;
  expanedModePaneWidth?: number;
  compactModeThresholdWidth?: number | ThresholdWidth.Compact;
  expandedModeThresholdWidth?: number | ThresholdWidth.Expanded;
};

export const NavigationView: React.FunctionComponent<_NavigationView> = (
  props
) => {
  const {
    filled = false,
    divided = false,
    paneDisplayMode = PaneDisplayMode.Auto,
    compactModeThresholdWidth = ThresholdWidth.Compact,
    expandedModeThresholdWidth = ThresholdWidth.Expanded,
  } = props;

  const isLarge = useMediaQuery({
    query: `screen and (min-width: ${expandedModeThresholdWidth}px)`,
  });

  const isMedium = useMediaQuery({
    query: `screen and (min-width: ${compactModeThresholdWidth}px)`,
  });

  const darkened = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const animated = useMediaQuery({
    query: "(prefers-reduced-motion: no-preference)",
  });

  const displayMode = isLarge
    ? DisplayMode.Large
    : isMedium
    ? DisplayMode.Medium
    : DisplayMode.Small;

  const _displayMode = () => {
    switch (paneDisplayMode) {
      case PaneDisplayMode.LeftMinimal:
        return DisplayMode.Small;
      case PaneDisplayMode.LeftCompact:
        return DisplayMode.Medium;
      case PaneDisplayMode.Left:
        return DisplayMode.Large;
      default:
        return displayMode;
    }
  };

  const context = {
    filled: filled,
    divided: divided,
    darkened: darkened,
    animated: animated,
    displayMode: _displayMode(),
    paneDisplayMode: paneDisplayMode,
  };

  return (
    <NavigationViewContext.Provider value={context}>
      <NavigationViewBody>
        <NavigationViewPane />
        <NavigationViewPage>
          <NavigationViewPageHeader />
          <NavigationViewPageContent items={props.paneContent} />
        </NavigationViewPage>
      </NavigationViewBody>
    </NavigationViewContext.Provider>
  );
};
