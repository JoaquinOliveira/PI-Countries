import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//renderiza el component card 
// con la data que necesito
const CardsContainer = ({currentCountry}) => {

    return (
        <div className={style.container}>
            {currentCountry.map(c => <Link to={"/home/" + c.id} className="linkCard"><Card
                name={c.name}
                flag={c.flag}
                continents={c.continents}
                id={c.id} /> </Link>)}
        </div>
    )
}
export default CardsContainer