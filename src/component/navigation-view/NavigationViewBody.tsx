import * as React from "react";
import { mergeStyles } from "@fluentui/react";
import { NavigationViewContext } from "./ts/NavigationViewProvider";
import { PaneDisplayMode, DisplayMode } from "./ts/NavigationViewType";
import { makeStyles } from "@fluentui/react-components";

type BackgroundProps = {
  lightStyle?: any;
  nightStyle?: any;
  compactWidth?: number;
  expanedWidth?: number;
};

export const BodyStyles = makeStyles({
  root: {
    position: "fixed",
    display: "grid",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  animated: {
    transitionProperty: "all",
    transitionDuration: "280ms",
  },
  vertical: {
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "auto 1fr",
  },
  horizontal: {
    gridTemplateRows: "auto 1fr",
  },
});

const ThemeStyles = makeStyles({
  light: {
    backgroundImage: "linear-gradient(0deg, #f3f3f380, #f3f3f380)",
    backgroundColor: "#f3f3f3",
    backdropFilter: "blur(120px)",
    backgroundBlendMode: "color,luminosity",
  },
  night: {
    backgroundImage: "linear-gradient(0deg, #202020cc, #202020cc)",
    backgroundColor: "#202020",
    backdropFilter: "blur(120px)",
    backgroundBlendMode: "color,luminosity",
  },
});

export const NavigationViewBody: React.FunctionComponent<BackgroundProps> = (
  props
) => {
  const { animated, darkened, displayMode, paneDisplayMode } = React.useContext(
    NavigationViewContext
  );
  const { compactWidth = 48, expanedWidth = 320 } = props;

  const themeStyles = ThemeStyles();
  const { lightStyle = themeStyles.light, nightStyle = themeStyles.night } =
    props;

  const bodyStyles = BodyStyles();

  const style = mergeStyles(
    bodyStyles.root,
    animated && bodyStyles.animated,
    darkened ? nightStyle : lightStyle,
    paneDisplayMode === PaneDisplayMode.Top
      ? bodyStyles.vertical
      : [
          bodyStyles.horizontal,
          displayMode === DisplayMode.Large
            ? {
                gridTemplateColumns: `${expanedWidth}px 1fr`,
              }
            : displayMode === DisplayMode.Medium
            ? {
                gridTemplateColumns: `${compactWidth}px 1fr`,
              }
            : {
                gridTemplateColumns: "0px 1fr",
              },
        ]
  );

  return <div className={style}>{props.children}</div>;
};
