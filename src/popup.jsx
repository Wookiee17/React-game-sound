import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 20 + rand();
  const left = 10 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left})`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

class App extends React.Component {
  state = {
    modalOpen: false
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={12} lg={12} xs={12}>
            <Typography gutterBottom>
              Click to get full modal experrince design by Atul Prajapati
            </Typography>
            <Button onClick={this.handleOpen}>Open modal</Button>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.modalOpen}
              onClose={this.handleClose}
              item
              xs={6}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="h6" id="modal-title">
                  See the real Modal
                </Typography>

                <Typography variant="subtitle1" id="simple-modal-description">
                  lorem ipsum dollar sit amet
                </Typography>
                {/* <AppWrapped /> */}
                <img
                  item
                  xs={6}
                  style={{ width: "420px" }}
                  src="https://images.unsplash.com/photo-1553285991-4c74211f5097?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />

                <Button onClick={this.handleClose}>Close modal</Button>
              </div>
            </Modal>
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

const AppWrapped = withStyles(styles)(App);

export default AppWrapped;
