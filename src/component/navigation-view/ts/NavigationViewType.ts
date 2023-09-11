export type NavigationViewItem = {
  icon?: string;
  text: string;
  path: string;
  subicon?: string;
  subtext?: string;
  component: React.ComponentType;
  subcomponent?: React.FunctionComponent | React.ReactNode;
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
