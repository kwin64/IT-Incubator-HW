import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>,
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {users, addUserCallback}
) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(''); // need to fix any
    const [error, setError] = useState<boolean>(true); // need to fix any

    /*const isValid = (str:string) => {
        return /^[A-Za-z]*!/.test(str)
    }*/

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value)  {
            setError(false)
            setName(e.currentTarget.value)
        } else (setError(true))
    };

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}`)
        setName('')
        setError(true)
    };

    const totalUsers = users.length;// need to fix


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
