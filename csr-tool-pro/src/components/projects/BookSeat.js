import React, { Component } from "react";
import * as firebase from "firebase";
import "./styles.css";

class BookSeat extends Component {
    constructor() {
        super();
        this.state = {
            tripDate: "2019/02/14",
            seatType: "EDTAP",
            number: 1
        }
    }

    componentDidMount() {
        const rootRef = firebase.database().ref().child("wcts-count-tool");
        const numberRef = rootRef.child("number");
        numberRef.on("value", snap => {
            this.setState({
                number: snap.val()
            });
        });
                // this.setState({
        //     number: 10
        // })
    }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("handleSubmit", this.state);
    //     this.props.createReservation(this.state)
    // }

    render() {
        return(
            // <div className="sign-in-container">
            //     <form 
            //         onSubmit={this.handleSubmit} 
            //         className="white"
            //     >
            //         <h5>
            //             Sign In
            //         </h5>
            //         <div className="input-field">
            //             <label htmlFor="date">Date</label>
            //             <input 
            //                 type="date" 
            //                 id="date" 
            //                 // value={nextDay}
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <div className="input-field">
            //             <label htmlFor="text">Seat Type</label>
            //             <input 
            //                 type="seatType" 
            //                 id="seatType"
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <div className="input-field">
            //             <label htmlFor="number">Number</label>
            //             <input 
            //                 type="number" 
            //                 id="number"
            //                 step="0.01"
            //                 pattern="\d+"
            //                 onChange={this.handleChange}
            //             />
            //         </div>
            //         <div className="input-field">
            //             <button className="button">
            //                 Book Seat
            //             </button>
            //         </div>
            //     </form>
            // </div>
            <div className="reservations-container">
                <h1>{this.state.number}</h1><h1>{this.state.number}</h1><h1>{this.state.number}</h1>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createReservation: (reservation) => dispatch(createReservation(reservation))
//     }
// }

// export default connect(null, mapDispatchToProps)(BookSeat);

export default BookSeat;