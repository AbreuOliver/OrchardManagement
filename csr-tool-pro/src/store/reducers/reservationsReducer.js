const initialState = {
    reservations: [
        {id: "1", tripDate: "2012/02/12", seatType: "EDTAP", number: 1},
        {id: "2", tripDate: "2012/02/14", seatType: "EMP", number: 0.5},
        {id: "3", tripDate: "2012/02/16", seatType: "WakeTran", number: -1}
    ]
};

const reservationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_RESERVATION': 
            console.log("created project", action.reservation)
            return state;
        case "CREATE_RESERVATION_ERROR":
            console.log("error creating reservation", action.err)
            return state;
        default:
            return state;
    }
}

export default reservationsReducer;