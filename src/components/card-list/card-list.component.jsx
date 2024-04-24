import { Component } from "react";
import CardRender from "../card/card";
import './card-list.component.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
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
}
export default CardList;