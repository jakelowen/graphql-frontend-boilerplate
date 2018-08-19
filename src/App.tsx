import * as React from "react";
import {
  withStyles,
  StyleRulesCallback,
  WithStyles
} from "@material-ui/core/styles";
import withRoot from "./withRoot";

const styles: StyleRulesCallback<"root"> = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20
  }
});

class App extends React.Component<WithStyles<"root">> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
