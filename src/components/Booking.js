import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

const Booking = (props) => {

// Booking

    return (

        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Booking;