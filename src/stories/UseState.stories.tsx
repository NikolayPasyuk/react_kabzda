import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}

function generateDate() {
    //difficult counting
    return 37466390
}

export const Example1 = () => {
    console.log('Example1')

    const initialValue = useMemo(generateDate, [])

    const [counter, setCounter] = useState(initialValue)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}

