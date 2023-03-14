import React from 'react'

export default function Variantes(props) {
    const variantes = props.variantes;
    console.log(variantes);
   

   

    const Add = () => {
        console.log("Add");
        const name = document.querySelector('input[name=ingredient]').value;
        const image = document.querySelector('input[name=image]').value;
        const id = variantes.length + 1;
        
        console.log(name);
        const newIngredient = {
            id:  id,
            name: name,
            image: image,

        }
        //console.log(newIngredient);
        variantes.push(newIngredient);
        console.log(variantes);
    }



    return (
        <>
            <label>Nouvel ingrédient : </label>
            <input name='ingredient'></input>
            <input type="file"
       id="avatar" name="image"
                accept="image/png, image/jpeg">
            </input>
            <button onClick={Add}>Ajouter</button>

 
 
            
        </>

    )
}
