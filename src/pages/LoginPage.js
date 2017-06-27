import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import defaultTheme from '../themes/defaultTheme';
import * as userActions from '../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {metaModel} from "../configurations/metaModel";
import toastr from 'toastr';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: Object.assign({}, props.user),
            errors:{},
            saving: false
        };

        this.login = this.login.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount(){
        metaModel.title = 'Login';
        metaModel.prepareMetaInfo(metaModel);
    }

    login(event)
    {
        event.preventDefault();
        this.props.actions.login(this.state.user).then(() => {
            this.props.history.push('/');
        }).catch(error => {
            toastr.error(error);
        });
    }

    updateState(event){
        const field = event.target.name;
        let user = this.state.user;
        user[field] = event.target.value;
        return this.setState({user: user});
    }

    render() {
        const styles = {
            loginContainer: {
                minWidth: 320,
                maxWidth: 400,
                height: 'auto',
                position: 'absolute',
                top: '30%',
                left: 0,
                right: 0,
                margin: 'auto'
            },
            paper: {
                padding: 20,
                overflow: 'auto'
            },
            buttonsDiv: {
                textAlign: 'center',
                padding: 10
            },
            flatButton: {
                color: grey500
            },
            checkRemember: {
                style: {
                    float: 'left',
                    maxWidth: 180,
                    paddingTop: 5
                },
                labelStyle: {
                    color: grey500
                },
                iconStyle: {
                    color: grey500,
                    borderColor: grey500,
                    fill: grey500
                }
            },
            loginBtn: {
                float: 'right'
            },
            btn: {
                background: '#4f81e9',
                color: white,
                padding: 7,
                borderRadius: 2,
                margin: 2,
                fontSize: 13
            },
            btnFacebook: {
                background: '#4f81e9'
            },
            btnGoogle: {
                background: '#e14441'
            },
            btnSpan: {
                marginLeft: 5
            },
        };

        return (
            <MuiThemeProvider muiTheme={defaultTheme}>
                <div>
                    <div style={styles.loginContainer}>

                        <Paper style={styles.paper}>

                            <form>
                                <TextField
                                    hintText="E-Mail"
                                    floatingLabelText=""
                                    name="email"
                                    value={this.state.user.email}
                                    onChange={this.updateState}
                                    fullWidth={true}
                                />
                                <TextField
                                    hintText="Password"
                                    floatingLabelText=""
                                    name="password"
                                    fullWidth={true}
                                    onChange={this.updateState}
                                    value={this.state.user.password}
                                    type="password"
                                />

                                <div>
                                    <Checkbox
                                        label="Remind me"
                                        style={styles.checkRemember.style}
                                        labelStyle={styles.checkRemember.labelStyle}
                                        iconStyle={styles.checkRemember.iconStyle}
                                    />

                                    <RaisedButton label="Login"
                                                  primary={true}
                                                  onClick={this.login}
                                                  style={styles.loginBtn}/>
                                </div>
                            </form>
                        </Paper>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(){
    let user = {email:'', password:''};

    return {
        user: user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);