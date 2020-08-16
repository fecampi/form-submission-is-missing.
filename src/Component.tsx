import React, { useState } from 'react';

//1-Propriedade
interface HeaderProps {
    title:string;
    subTitle?:string;

}

//2-Componente
const Header: React.FC<HeaderProps> = (props) => {

    //3-Estado
    const [counter, setCounter] = useState(0)

    function handleButtonClick(){
        setCounter(counter+1);
        console.log(counter);
    }

    return (
        <header>
            <h1>{props.title}{counter}</h1>
            <button type="button" onClick={handleButtonClick}>Clique</button>
        </header>
    )
}

export default Header;