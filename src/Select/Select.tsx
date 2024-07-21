import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: number
}

export type SelectPropsType = {
    value?: number
onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value);
    const [edit, setEdit] = useState(false)
    const setEditHandler = () => {
        setEdit(!edit)
    }
    return (
        <>
            <div className={styles.select} onClick={setEditHandler}>
           <span>{selectedItem?.title}</span>
                {!edit &&     <div className={styles.items}>
                    {props.items.map(i =>
                        <div key={i.value} onClick={()=> {props.onChange(i.value)}}>{i.title}</div>
                    )}
                </div>}

            </div>
        </>
    )
}

