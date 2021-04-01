import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Usercontext } from '../../App';

const PrivateRouter = ({children,...rest}) => {
    const [loggedinuser, setloggedinuser]=useContext(Usercontext);
    return (
        <div>
                <Route
      {...rest}
      render={({ location }) =>
        loggedinuser.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRouter;