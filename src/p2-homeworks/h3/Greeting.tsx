import React, {KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:  React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const onKeyPressHandler = ( e: KeyboardEvent <HTMLInputElement> ) => {
        if (e.key === 'Enter') {
            addUser()
        }
    }; // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={onKeyPressHandler}
                   />
            <span>{error}</span>
            <button onClick={addUser}
                    disabled={error}
            >add</button>
            <span> {totalUsers}</span>
        </div>
    );
}

export default Greeting;
