import style from './Card.modules.css'
const Card = (props) => {
    return (
        <div className ={style.card}>
           <p>Name: {props.name}</p> 
           <p>Phone: {props.phone}</p> 
           <p>Email: {props.email}</p> 
           
        </div>
    )
}