import React from 'react';

const Weather = (props) => {
    return (
        <div>
        {/* here we are checking availability of states before displaying them on screen so we don't display undefined values */}
        {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions:  {props.description}</p>}
        {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;