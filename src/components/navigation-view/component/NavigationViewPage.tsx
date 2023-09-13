import { mergeStyles } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import React from "react";
import { NavigationViewContext } from "../common/Context";
import { PaneDisplayMode, DisplayMode } from "../common/Type";

const useStyles = makeStyles({
  root: {
    display: "grid",
  },
  background: {
    backgroundColor: "#ffffff80",
  },
  left: {
    gridRowStart: "2",
    gridColumnStart: "2",
  },
  top: {
    gridRowStart: "2",
    gridColumnStart: "1",
    gridColumnEnd: "span 2",
  },
  small: {
    paddingLeft: "1rem",
    paddingTop: "1rem",
    paddingRight: "1rem",
  },
  medium: {
    paddingLeft: "2rem",
    paddingTop: "2rem",
    paddingRight: "2rem",
  },
  large: {
    paddingLeft: "3rem",
    paddingTop: "3rem",
    paddingRight: "3rem",
  },
});

type NavigationViewPageType = {
  background?: string;
};
export const NavigationViewPage: React.FunctionComponent<
  NavigationViewPageType
> = (props) => {
  const { displayMode, paneDisplayMode } = React.useContext(
    NavigationViewContext
  );
  const styles = useStyles();
  const classes = mergeStyles(
    styles.root,
    props.background ?? styles.background,
    paneDisplayMode === PaneDisplayMode.Top
      ? styles.top
      : [
          styles.left,
          displayMode === DisplayMode.Large
            ? styles.large
            : displayMode === DisplayMode.Medium
            ? styles.medium
            : styles.small,
        ]
  );
  return <div className={classes}></div>;
};
