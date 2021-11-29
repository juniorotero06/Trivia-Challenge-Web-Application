import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

function RouteQuest({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) return <Redirect to="/second-page" />;
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(RouteQuest);
