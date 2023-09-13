import * as React from "react";
import { mergeStyles } from "@fluentui/react";
import { makeStyles } from "@fluentui/react-components";
import { NavigationViewContext } from "../common/Context";
import { DisplayMode, PaneDisplayMode } from "../common/Type";

const useStyles = makeStyles({
  root: {
    display: "grid",
  },
  left: {
    gridRowEnd: "span 2",
    gridTemplateRows: "auto 1fr auto",
  },
  top: {
    gridColumnEnd: "span 2",
    gridTemplateColumns: "auto 1fr auto",
  },
  small: {
    width: "0rem",
    transitionProperty: "width",
    transitionDuration: "100ms",
  },
  medium: {
    width: "3rem",
    transitionProperty: "width",
    transitionDuration: "200ms",
  },
  large: {
    transitionProperty: "width",
    transitionDuration: "300ms",
  },
});

export const NavigationViewPane: React.FunctionComponent = (props) => {
  const { displayMode, paneDisplayMode } = React.useContext(
    NavigationViewContext
  );
  const styles = useStyles();
  const classes = mergeStyles(
    styles.root,
    paneDisplayMode === PaneDisplayMode.Top
      ? styles.top
      : [
          styles.left,
          displayMode === DisplayMode.Large
            ? [
                styles.large,
                {
                  width: `20rem`,
                },
              ]
            : displayMode === DisplayMode.Medium
            ? styles.medium
            : styles.small,
        ]
  );
  return (
    <div className={classes}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
