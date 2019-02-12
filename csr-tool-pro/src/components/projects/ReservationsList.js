import React from "react";
import ReservationSummary from "./ReservationSummary";
// import "./styles.css"

const ReservationsList = ({ reservations }) => {
    return (
        <div className="reservations-list-container">
            <h2>Reservations List</h2>
            { reservations && reservations.map(reservation => {
                return (
                    <ReservationSummary 
                        reservation={reservation}
                        key={reservation.id} 
                    />
                )
            })}
        </div>
    )
}

export default ReservationsList;