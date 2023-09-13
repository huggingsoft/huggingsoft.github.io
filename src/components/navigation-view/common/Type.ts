export type NavigationViewItemType = {
  icon?: string;
  text: string;
  path: string;
  subicon?: string;
  subtext?: string;
  component?: React.ComponentType;
  subcomponent?: React.FunctionComponent | React.ReactNode;
};

export type NavigationViewType = {
  paneDisplayMode?: PaneDisplayMode;
  paneHeader?: string | React.ReactNode;
  menuItems: Array<NavigationViewItemType>;
  footerMenuItems?: Array<NavigationViewItemType>;
  compactModeThresholdWidth?: number | ThresholdWidth.Compact;
  expandedModeThresholdWidth?: number | ThresholdWidth.Expanded;
};

export enum ThresholdWidth {
  Compact = 641,
  Expanded = 1008,
}

export enum PaneDisplayMode {
  Top = "Top",
  Auto = "Auto",
  Left = "Left",
  LeftCompact = "LeftCompact",
  LeftMinimal = "LeftMinimal",
}

export enum DisplayMode {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}
