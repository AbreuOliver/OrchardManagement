export const createReservation = (reservation) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection("reservations").add({
            ...reservation, 
            authorFirstName: "Oliver",
            authorLastName: "Abreu",
            authorID: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_RESERVATION', reservation });
        }).catch((err) => {
            dispatch({ type: "CREATE_RESERVATION_ERROR", err })
        })
        
    }
};