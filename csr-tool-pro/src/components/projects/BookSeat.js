import React, { Component } from "react";
import "../auth/styles.css"

class BookSeat extends Component {
    state = {
        date: "",
        seatType: "",
        number: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <div className="sign-in-container">
                <form 
                    onSubmit={this.handleSubmit} 
                    className="white"
                >
                    <h5>
                        Sign In
                    </h5>
                    <div className="input-field">
                        <label htmlFor="date">Date</label>
                        <input 
                            type="date" 
                            id="date" 
                            // value={nextDay}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="text">Seat Type</label>
                        <input 
                            type="seatType" 
                            id="seatType"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="number">Number</label>
                        <input 
                            type="number" 
                            id="number"
                            step="0.01"
                            pattern="\d+"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="button">
                            Book Seat
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BookSeat;