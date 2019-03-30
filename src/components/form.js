import React from 'react';

const Form = (props)=> {
    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City..."></input>
            <input type="text" name="country" placeholder="Country..."></input>
            <button>Get Weather</button>
        </form>
    )
}

export default Form