import React, {useState} from "react";

import {Select} from "./Select";

export default {
    title:'Select',
    component:Select,
}
const allItems = [
    {value: 1, title: 'Dimitch'},
    {value: 2, title: 'Viktor'},
    {value: 3, title: 'Andre'},
    {value: 4, title: 'Alex'},
    {value: 5, title: 'Ernyz'},
]
export const WithValue = () => {

    const [value,setValue] = useState(2)
    return(
        <div>
            <Select onChange={setValue} value={value}
                    items={allItems} />
        </div>
    )}
export const WithoutValue = () => {
    const [value,setValue] = useState(0)
    return(
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={allItems}/> </div>
    )}
/*
export const WithoutValue = () => <Select onChange={action('This Select')}
        items={[{value: 1, title: 'Dimitch'}, {value: 2, title: 'Viktor'}, {value: 3, title: 'Andre'}]}
/>*/

