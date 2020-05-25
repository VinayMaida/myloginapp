import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import alertActions from './alert.actions.js';
import PrivateRoute from './PrivateRoute.jsx';
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx';
import SIGNUPPage from './SIGNUPPage.jsx';
import history from './history.js';
import Home from './Home';
class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        < Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/SIGNUP" component={SIGNUPPage} />
                                <Route path="/Home" component={Home}/>
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};
export default connect(mapState, actionCreators)(App);

