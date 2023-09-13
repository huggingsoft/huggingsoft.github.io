import React from "react";

import { useMediaQuery } from "react-responsive";

import { NavigationViewContext } from "./common/Context";
import {
  PaneDisplayMode,
  ThresholdWidth,
  DisplayMode,
  NavigationViewType,
} from "./common/Type";
import { NavigationViewBase } from "./component/NavigationViewBase";
import { NavigationViewPane } from "./component/NavigationViewPane";
import { NavigationViewPage } from "./component/NavigationViewPage";

export const NavigationView: React.FunctionComponent<NavigationViewType> = (
  props
) => {
  const {
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

  const displayMode = () => {
    switch (paneDisplayMode) {
      case PaneDisplayMode.LeftMinimal:
        return DisplayMode.Small;
      case PaneDisplayMode.LeftCompact:
        return DisplayMode.Medium;
      case PaneDisplayMode.Left:
        return DisplayMode.Large;
      case PaneDisplayMode.Auto:
        return isLarge
          ? DisplayMode.Large
          : isMedium
          ? DisplayMode.Medium
          : DisplayMode.Small;
      default:
        return DisplayMode.Large;
    }
  };

  const context = {
    displayMode: displayMode(),
    paneDisplayMode: paneDisplayMode,
  };

  return (
    <NavigationViewContext.Provider value={context}>
      <NavigationViewBase>
        <NavigationViewPane />
        <NavigationViewPage />
      </NavigationViewBase>
    </NavigationViewContext.Provider>
  );
};
