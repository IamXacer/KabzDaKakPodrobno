import { Clock } from "./Clock";

export default {
    title: 'Clock',
    component: Clock,
}

export const AnalogExample = () => {
    return <Clock mode={'analog'} />;
}

export const DigitalExample = () => {
    return <Clock mode={'digital'} />;
}
