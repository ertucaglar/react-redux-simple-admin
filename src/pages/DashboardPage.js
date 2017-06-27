import React, {Component} from 'react';
import InfoBox from "../components/InfoBox";
import DescriptionIcon from 'material-ui/svg-icons/action/description';
import SaleIcon from 'material-ui/svg-icons/action/assessment';
import UsersIcon from 'material-ui/svg-icons/action/supervisor-account';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import {globalAppSettings} from "../configurations/globalAppSettings";
import globalStyles from "../styles/globalStyles";
import {metaModel} from "../configurations/metaModel";

class DashboardPage extends Component {
    componentWillReceiveProps(nextProps){
    }

    componentDidMount(){
        metaModel.title = 'Dashboard';
        metaModel.prepareMetaInfo(metaModel);
    }

    render() {
        return (
            <div>
                <h3 style={globalStyles.navigation}>{globalAppSettings.app.name} / Dashboard</h3>

                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
                        <InfoBox Icon={DescriptionIcon}
                                 color={pink600}
                                 title="Products"
                                 value="0"
                        />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
                        <InfoBox Icon={UsersIcon}
                                 color={cyan600}
                                 title="Customers"
                                 value="0"
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 m-b-15 ">
                        <InfoBox Icon={SaleIcon}
                                 color={purple600}
                                 title="Orders"
                                 value="0"
                        />
                    </div>
                </div>
                {
                    /*
                     <div className="row">
                     <div className="col-xs-12 col-sm-12 col-lg-12 m-b-15">
                     <Paper style={globalStyles.paper}>
                     <Line data={this.state.data}/>
                     </Paper>
                     </div>
                     </div>
                     */
                }
            </div>
        );
    }
}

export default DashboardPage;