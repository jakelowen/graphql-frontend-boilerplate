import * as React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import classNames from "classnames";

import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = (theme: Theme) =>
  createStyles({
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    close: {},
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: "flex",
      alignItems: "center"
    }
  });

interface MySnackbarContentProps extends WithStyles<typeof styles1> {
  className: string;
  message: string;
  onClose: (event: React.MouseEvent<HTMLInputElement>) => void;
  variant: string;
  open: boolean;
}

function MySnackbarContent(props: MySnackbarContentProps) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  const messageComp = (
    <span id="client-snackbar" className={classes.message}>
      <Icon className={classNames(classes.icon, classes.iconVariant)} />
      {message}
    </span>
  );

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={messageComp}
      action={
        [
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ] as any
      }
      {...other}
    />
  );
}

const CustomSnackContent = withStyles(styles1)(MySnackbarContent);

const styles2 = (theme: Theme) =>
  createStyles({
    snack: {
      marginTop: theme.spacing.unit * 3
    }
  });

interface CustomSnackProps extends WithStyles<typeof styles2> {
  variant: "success" | "warning" | "error" | "info";
  message: string;
}

class CustomSnack extends React.PureComponent<CustomSnackProps> {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event: React.MouseEvent<HTMLInputElement>): void => {
    // if (reason === "clickaway") {
    //   return;
    // }

    return this.setState({ open: false });
  };

  render() {
    const { classes, variant, message } = this.props;
    return (
      <div>
        {this.state.open ? (
          <CustomSnackContent
            open={false}
            onClose={this.handleClose}
            variant={variant}
            message={message}
            className={classes.snack}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles2)(CustomSnack);
