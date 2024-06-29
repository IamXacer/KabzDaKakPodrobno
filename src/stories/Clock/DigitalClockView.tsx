import React from "react";
import {ClockViewPropsTypes} from "./Clock";

export const DigitalClockView: React.FC<ClockViewPropsTypes> = ({data}) => {
    const secondsString = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()
    const minutesString = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
    return (
        <>
            <span>{data.getHours()}</span> : <span>{minutesString}</span> : <span>{secondsString}</span>
        </>
    )
}