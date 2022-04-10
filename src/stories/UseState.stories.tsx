import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateDate() {
    //difficult counting
    console.log('generateDate')
    return 1
}

export const Example1 = () => {
    console.log('Example1')

    //const initialValue = useMemo(generateDate, [])

    const [counter, setCounter] = useState<number>(generateDate)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+
        </button>
        {counter}
    </>
}

