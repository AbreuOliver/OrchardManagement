import React from "react";

const ReservationSummary = ({ reservation }) => {
    return(
        <div className="reservation-summary">
            <span>
                {reservation.number}
            </span>
            <span>
                {reservation.seatType}
            </span>
            <span>
                booked by Oliver
            </span>
        </div>
    )
}

export default ReservationSummary;