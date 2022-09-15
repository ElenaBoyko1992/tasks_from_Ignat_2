import React, {KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const addUser = () => {
        if (name) {
            setError('');
            addUserCallback(name);
            alert(`Hello ${name}!`) // need to fix
        } else {
            setError('Enter your name')
        }
        setName('')
    }
    const enterKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('');
        (e.key === 'Enter') && addUser()
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setName}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            enterKeyHandler={enterKeyHandler}
        />
    )
}

export default GreetingContainer
