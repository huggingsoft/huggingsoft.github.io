import { Text, mergeStyles } from "@fluentui/react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationViewContext } from "./ts/NavigationViewProvider";
import {
  PaneDisplayMode,
  DisplayMode,
  NavigationViewItem,
} from "./ts/NavigationViewType";

const PageStyles = makeStyles({
  root: {
    display: "grid",
    gridRowStart: "2",
    gridTemplateRows: "auto 1fr",
    ...shorthands.overflow("hidden"),
  },

  horizontal: {
    gridColumnStart: "2",
  },

  vertical: {
    gridColumnStart: "1",
    gridColumnEnd: "span 2",
  },

  verticalDivided: {
    ...shorthands.borderTop("1px", "solid"),
  },

  small: {
    borderTopLeftRadius: "0px",
  },

  large: {
    borderTopLeftRadius: "7px",
  },

  smallDivided: {
    boxSizing: "border-box",
    width: "calc(100% + 1px)",
    transform: "translateX(-1px)",
    borderTopLeftRadius: "0px",
    ...shorthands.borderLeft("1px", "solid"),
  },

  largeDivided: {
    boxSizing: "border-box",
    ...shorthands.borderLeft("1px", "solid"),
  },
});

type PagePorps = {
  lightStyle?: any;
  nightStyle?: any;
};

export const NavigationViewPage: React.FunctionComponent<PagePorps> = (
  props
) => {
  const { filled, divided, darkened, displayMode, paneDisplayMode } =
    React.useContext(NavigationViewContext);
  const {
    lightStyle = {
      backgroundColor: "#ffffff80",
      ...shorthands.borderColor("#75757566"),
    },
    nightStyle = {
      backgroundColor: "#3a3a3a4d",
      ...shorthands.borderColor("#0000001a"),
    },
  } = props;
  const classes = PageStyles();
  const style = mergeStyles(
    classes.root,
    darkened ? nightStyle : lightStyle,
    paneDisplayMode === PaneDisplayMode.Top
      ? [classes.vertical, divided && classes.verticalDivided]
      : [
          classes.horizontal,
          filled
            ? [
                { paddingTop: "3rem" },
                divided && displayMode === DisplayMode.Small
                  ? classes.smallDivided
                  : classes.largeDivided,
              ]
            : [
                { marginTop: "3rem" },
                divided
                  ? [
                      classes.verticalDivided,
                      displayMode === DisplayMode.Small
                        ? classes.smallDivided
                        : [
                            classes.largeDivided,
                            { borderTopLeftRadius: "7px" },
                          ],
                    ]
                  : displayMode === DisplayMode.Small
                  ? classes.small
                  : classes.large,
              ],
        ]
  );
  return <div className={style}>{props.children}</div>;
};

const PageHeaderStyle = makeStyles({
  filled: { paddingTop: "3rem" },
  small: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  large: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
});

type PageHeaderProps = {
  text?: string;
  compoment?: React.ReactNode;
};

export const NavigationViewPageHeader: React.FunctionComponent<
  PageHeaderProps
> = (props) => {
  const { filled, displayMode, paneDisplayMode } = React.useContext(
    NavigationViewContext
  );
  const { text, compoment } = props;

  const classes = PageHeaderStyle();
  const style = mergeStyles(
    displayMode === DisplayMode.Small ? classes.small : classes.large,
    paneDisplayMode === PaneDisplayMode.Top && classes.filled,
    !filled && classes.filled
  );

  return (
    <div className={style}>
      {text ? <Text variant="xxLarge">{text}</Text> : compoment}
    </div>
  );
};

const PageContentStyles = makeStyles({
  small: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  large: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
  },
});
type PageContentProps = {
  items?: Array<NavigationViewItem>;
};
export const NavigationViewPageContent: React.FunctionComponent<
  PageContentProps
> = (props) => {
  const { displayMode } = React.useContext(NavigationViewContext);
  const { items } = props;
  const classes = PageContentStyles();
  const style = mergeStyles(
    displayMode === DisplayMode.Small ? classes.small : classes.large
  );
  return (
    <div className={style}>
      <Routes>
        {items?.map((i) => (
          <Route key={i.path} path={i.path} Component={i.component} />
        ))}
      </Routes>
    </div>
  );
};
