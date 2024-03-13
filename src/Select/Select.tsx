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
    const [edit, setEdit] = useState(false)
    const [hoverElement, setHoverElement] = useState<number>(props.value!)
    const selectedItem = props.items.find(i => i.value === props.value)
   /* const hoverItem = props.items.find(i => i.value === hoverElement)*/

    useEffect(() => {
        setHoverElement(props.value!)
    }, [props.value]);
    const setEditHandler = () => {
        setEdit(!edit)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        setEditHandler()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoverElement) {
                    const prevValue = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (prevValue) {
                        props.onChange(prevValue.value)
                        break
                    }if(!selectedItem){
                        props.onChange(props.items[0].value)
                    }
                }}}
        if (e.key === 'Enter' || e.key === 'Escape'){
            setEdit(true)
        }
    }

    return (
        <>
            <div className={styles.select} onClick={setEditHandler}
                 onKeyUp={onKeyUp} tabIndex={0}
            >
            <span className={styles.main}>
                        {selectedItem && selectedItem.title}
                    </span>
                {!edit && <div className={styles.items}>
                    {
                        props.items.map(i =>
                            <div className={`${styles.item} ${hoverElement === i.value ? styles.selected : ''}`} key={i.value}
                                 onMouseEnter={() => {
                                     setHoverElement(i.value)
                                 }}
                                 onClick={() => onItemClick(i.value)}
                            >{i.title}</div>)}
                </div>
                }
            </div>
        </>
    )
}

