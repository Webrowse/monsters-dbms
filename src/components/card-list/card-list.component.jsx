
import CardRender from "../card/card";
import './card-list.component.css';

const CardList = ({ monsters }) => {
    return (
        <div className='card-list'>
            {monsters.map((monst) => {
                const { id, name, email } = monst;
                return (
                    <CardRender monsters={monst} />
                )
            })}
        </div>
    );
}

export default CardList;