import style from './Card.modules.css'
const Card = (props) => {
    return (
        <div className ={style.card}>
           <p>Id: {props.id}</p> 
           <p>Name: {props.name}</p>
           <p>Flag: <img src = {props.flag} alt= 'Flag'/></p> 
           <p>Continent: {props.continent}</p> 
           
        </div>
    )
}

export default Card