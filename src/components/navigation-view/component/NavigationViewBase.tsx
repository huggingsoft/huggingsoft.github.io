import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import { mergeStyles } from "@fluentui/react";

const useStyles = makeStyles({
  root: {
    display: "grid",
    width: "100%",
    height: "100%",
    gridTemplateRows: "3rem 1fr",
    gridTemplateColumns: "auto 1fr",
  },
  background: {
    backgroundColor: "#F3F3F3",
    backdropFilter: "blur(120px)",
    backgroundBlendMode: "color,luminosity",
    backgroundImage: "linear-gradient(0deg, #F3F3F380, #F3F3F380)",
  },
});

type NavigationViewBaseType = {
  background?: string;
};

export const NavigationViewBase: React.FunctionComponent<
  NavigationViewBaseType
> = (props) => {
  const styles = useStyles();
  const classes = mergeStyles(
    styles.root,
    props.background ?? styles.background
  );
  return <div className={classes}>{props.children}</div>;
};
