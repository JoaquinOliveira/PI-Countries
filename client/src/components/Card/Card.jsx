import style from './Card.module.css'
const Card = (props) => {
    return (
        <div className = {style.card}>
            <p>{props.name}</p>
            <p>{props.flag}{/* <img src={props.flag} alt='Flag' /> */}</p>
            <p>{props.continents}</p>
        </div >
    )
}

export default Card