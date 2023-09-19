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
    transitionProperty: "width",
    transitionDuration: "100ms",
  },
  medium: {
    transitionProperty: "width",
    transitionDuration: "200ms",
  },
  large: {
    transitionProperty: "width",
    transitionDuration: "300ms",
  },
});

type NavigationViewPaneType = {
  expandWidth?: number;
};

export const NavigationViewPane: React.FunctionComponent<
  NavigationViewPaneType
> = (props) => {
  const { displayMode, paneDisplayMode } = React.useContext(
    NavigationViewContext
  );
  const { expandWidth = 20 } = props;
  const [close, setClose] = React.useState(false);
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
                  width: `${close ? 3 : expandWidth}rem`,
                },
              ]
            : displayMode === DisplayMode.Medium
            ? [styles.medium, { width: `3rem` }]
            : [styles.small, { width: `0rem` }],
        ]
  );
  const classes2 = mergeStyles(
    styles.root,
    paneDisplayMode === PaneDisplayMode.Top
      ? styles.top
      : [
          styles.left,
          (displayMode === DisplayMode.Medium || displayMode===DisplayMode.Small) &&
            !close && {
              position: "fixed",
              height: "100%",
              backgroundColor: "#f3f3f3",
            },
          displayMode === DisplayMode.Medium && [
            styles.medium,
            {
              width: `${close ? 3 : expandWidth}rem`,
            },
          ],
          displayMode === DisplayMode.Small && [
            styles.small,
            {
              width: `${close ? 0 : expandWidth}rem`,
            },
          ],
        ]
  );

  function handleClose() {
    setClose(!close);
  }
  return (
    <div className={classes}>
      <div className={classes2}>
        <div>
          <button onClick={handleClose}>close</button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};