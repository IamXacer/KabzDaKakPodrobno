import React, {useEffect} from "react";
import styles from "./Clock.module.css";
import {ClockViewPropsTypes} from "./Clock";

export const AnalogsClockView: React.FC<ClockViewPropsTypes> = ({data}) => {
/*
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
    }, []);
*/

    const seconds = data.getSeconds();
    const minutes = data.getMinutes();
    const hours = data.getHours();

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
}