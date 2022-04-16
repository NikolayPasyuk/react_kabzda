import React, {useEffect, useState} from 'react';

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const get2digitsString = (num: number) => num < 10 ? '0' + num : num

    const secondsString = get2digitsString(date.getSeconds())

    const minutesString = get2digitsString(date.getMinutes())

    const hoursString = date.getHours() < 10
        ? '0' + date.getHours()
        : date.getHours()

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}