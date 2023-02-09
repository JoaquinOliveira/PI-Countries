import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useSelector } from 'react-redux'
//renderiza el component card 
// con la data que necesito
const CardsContainer = () => {
    const users = useSelector(state => state.users)

    return (
        <div className={style.container}>
            {users.map(user => <Card
                id={user.id}
                name={user.name}
                phone={user.phone}
                email={user.email}
            />)}
        </div>
    )
}
export default CardsContainer