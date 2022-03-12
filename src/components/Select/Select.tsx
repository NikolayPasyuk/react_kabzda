import React from "react";
import {RatingValueType} from "../Rating/Rating";

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: RatingValueType
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <div>{}</div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}
