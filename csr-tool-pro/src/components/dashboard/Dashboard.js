import React, { Component } from "react";
import ReservationsList from "../projects/ReservationsList.js";
import { connect } from "react-redux";
import "./styles.css"


class Dashboard extends Component {
    render() {
        console.log("inside Dashboard", this.props  );
        const { reservations } = this.props;
        return (
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <div>
                    <ReservationsList reservations={reservations}/>
                </div>
                <div>
                    {/* <Notifications /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reservations: state.reservation.reservations
    }
}

export default connect(mapStateToProps)(Dashboard);