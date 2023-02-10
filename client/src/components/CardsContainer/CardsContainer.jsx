import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux'
//renderiza el component card 
// con la data que necesito
const CardsContainer = () => {
    const countries = useSelector(state => state.countries)

    return (
        <div className={style.container}>
            {countries.map(c => <Card
                id={c.id}
                name={c.name}
                flag={c.flag}
                continent={c.continent}
            />)}
        </div>
    )
}
export default CardsContainer