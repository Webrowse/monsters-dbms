import { Component } from "react";
import './card-list.component.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monst) => {
                    const { id, name, email } = monst;
                    return (
                        <div className="card-container" key={id}>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}/set2`} />
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default CardList;