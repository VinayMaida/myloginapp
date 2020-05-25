import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {ControlLabel } from "react-bootstrap";
import userActions from './user.actions.js';
import "./SIGNUPPage.css"
class SIGNUPPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                PhoneNumber: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.PhoneNumber && user.password) {
            this.props.SIGNUP(user);
        }
    }

    render() {
        const { SIGNUPing  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-4">
                <h2>SIGNUP</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <ControlLabel htmlFor="firstName">First Name</ControlLabel>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName &&
                            <div block
                            style={{backgroundColor: '#00BFFF', borderColor: '#45A293'}}>First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <ControlLabel htmlFor="lastName">Last Name</ControlLabel>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName &&
                            <div block
                            style={{backgroundColor: '#00BFFF', borderColor: '#45A293'}}>Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.PhoneNumber ? ' has-error' : '')}>
                        <ControlLabel htmlFor="PhoneNumber">PhoneNumber</ControlLabel>
                        <input type="text" className="form-control" name="PhoneNumber" value={user.PhoneNumber} onChange={this.handleChange} />
                        {submitted && !user.PhoneNumber &&
                            <div block
                            style={{backgroundColor: '#00BFFF', borderColor: '#45A293'}}>PhoneNumber is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <ControlLabel htmlFor="email">email</ControlLabel>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
                        {submitted && !user.email&&
                            <div block
                            style={{backgroundColor: '#00BFFF', borderColor: '#45A293'}}>email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <ControlLabel htmlFor="password">Password</ControlLabel>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password &&
                            <div block
                            style={{backgroundColor: '#00BFFF', borderColor: '#45A293'}}>Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">SIGNUP</button>
                        {SIGNUPing && // eslint-disable-next-line
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-success">Now, Please LOGIN</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { SIGNUPing } = state.registration;
    return { SIGNUPing };
}

const actionCreators = {
    SIGNUP: userActions.SIGNUP
}

export default connect(mapState, actionCreators)(SIGNUPPage);