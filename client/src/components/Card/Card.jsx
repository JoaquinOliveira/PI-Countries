import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <h2>{props.name}</h2>
                <p><img src={props.flag} alt='Flag' /></p>
                <h3>{props.continents}</h3>
                <Link to={`/home/${props.id}`} className="linkCard">
                    <button> More details</button>
                </Link>
            </div>
        </div>
    )
}

export default Card