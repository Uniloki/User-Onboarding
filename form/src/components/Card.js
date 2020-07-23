import React from 'react';

export default function Card(props) {
    const {details} = props

    return(
        <div>
            <h1> {details.name} </h1>
            <p> Email: {details.email} </p>
            <p> Password: secret </p>
            <p> Has agreed to the terms and conditions </p>
        </div>
    )

}