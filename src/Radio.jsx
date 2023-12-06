import React from "react";

const Radio = ({id, opcoes, titulo, active, value, onChange}) => {

    if(active){
        return <>
            <h1>{titulo}</h1>
            {opcoes.map((opcao, index) => {
                return <div>
                    <label htmlFor={id} key={index}>
                        <input type="radio" name={id} id={id} checked={value === opcao} value={opcao} onChange={onChange}/>
                        {opcao}
                    </label>
                </div>
            })}
        </>
    }else{
        return null
    }
}

export default Radio