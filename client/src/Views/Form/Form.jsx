const Form = () => {
    return (
        <>
        <h1>Esta es la vista de Form</h1>
        </>
    )
}

//del boton para crear el poke, receta, videojeugo, o actividad del país.
function handleSubmit(event) {
    event.preventDefault()
    axios.post(/*url de la data del getUsers de la base de datos)*/, form)
    .then(res=>alert(res))
    .catch(err=>alert(err))
}

//para crear el usuario y que se agregue a la base de datos.