import React, {Component} from 'react';
import menuConfig from '../configurations/menuConfig';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import LeftDrawer from "../components/layout/LeftDrawer";
import Header from "../components/layout/Header";

class BasePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: true
        };

        this.handleChangeRequestNavDrawer = this.handleChangeRequestNavDrawer.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.width !== nextProps.width) {
            this.setState({navDrawerOpen: nextProps.width === LARGE});
        }
    }

    handleChangeRequestNavDrawer() {
        this.setState({
            navDrawerOpen: !this.state.navDrawerOpen
        });
    }

    render() {
        let {navDrawerOpen} = this.state;
        const paddingLeftDrawerOpen = 236;
        const paddingTopDrawerOpen = 0;
        const styles = {
            header: {
                paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
            },
            contentPadding: { paddingTop: paddingTopDrawerOpen },
            container: {
                margin: '80px 20px 20px 15px',
                paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
            }
        };

        const content = this.props.children;

        return (
            <div>
                <Header styles={styles.header} handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer}/>

                <div style={styles.contentPadding}>
                    <LeftDrawer navDrawerOpen={navDrawerOpen}
                                menus={menuConfig.menus}
                                username="Jane"/>

                    <div style={styles.container}>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default withWidth()(BasePage);