import React, {useEffect, useState} from "react";
import styles from "./Clock.module.css";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogsClockView} from "./AnalogsClockView";

export type PropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock: React.FC<PropsType> = ({mode}) => {
    const [data, SetData] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            SetData(new Date())
        }, 1000)
    }, []);

    const secondsString = data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()
    const minutesString = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
    let view
switch (mode){
    case'analog':
        view = <AnalogsClockView data={data}/>
        break;
    case'digital':
        default:
        view =  <DigitalClockView data={data}/>

}
    return (
        <div>
            {view}
        </div>
    );


}
export type ClockViewPropsTypes = {
    data:Date
};

export const AnalogClockView: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, []);

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

    return (
        <div className={styles.clock}>
            <div className={`${styles.hand} ${styles.secondHand}`} style={{transform: `rotate(${secondDegree}deg)`}}/>
            <div className={`${styles.hand} ${styles.minuteHand}`} style={{transform: `rotate(${minuteDegree}deg)`}}/>
            <div className={`${styles.hand} ${styles.hourHand}`} style={{transform: `rotate(${hourDegree}deg)`}}/>
            <div className={styles.center}></div>
        </div>
    );
};

