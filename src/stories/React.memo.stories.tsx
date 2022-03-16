import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UserSecret)

export const Example1 = () => {
    let [counter, setCounter] = useState(0)
    let [users, setUsers] = useState(['Nick', 'Masha', 'Artem', 'Valera'])

    const addUser = () => {
        const newUsers = [...users, 'Pavel' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

