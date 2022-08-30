import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../utils/customThemes";

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainContainer}>
      <CssBaseline />
      <Grid
        container
        className={classes.bigContainer}
        flexDirection="column"
        alignItems={"center"}
      >
        <Grid item>
          <Grid container>
            <Typography className={classes.paulIMob}>PaulImob</Typography>
          </Grid>
        </Grid>
        <Grid item paddingTop={"100px"}>
          <Grid container className={classes.credentialsTextField}>
            <Grid container className={classes.credentialsTypo}>
              <Typography>Username</Typography>
            </Grid>
            <TextField
              required
              className={classes.filledTextFiled}
              size="small"
              variant="filled"
              name="username"
              placeholder="Enter your username.."
            ></TextField>
          </Grid>
          <Grid
            container
            className={classes.credentialsTextField}
            paddingTop={"50px"}
          >
            <Grid container className={classes.credentialsTypo}>
              <Typography>Password</Typography>
            </Grid>
            <TextField
              required
              className={classes.filledTextFiled}
              size="small"
              variant="filled"
              name="password"
              placeholder="Enter your password.."
            ></TextField>
          </Grid>
          <Grid item>
            <Grid container className={classes.questionTypo}>
              <Typography>You don't have an account?</Typography>
            </Grid>
            <Grid container>
              <Typography>Register</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="custombrown">
              <Typography color={"whitesmoke"}>Sign in</Typography>
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
