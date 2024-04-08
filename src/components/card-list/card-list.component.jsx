import { Component } from "react";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'>
                {monsters.map((monst) => {
                    const { id, name, email } = monst;
                    return (
                        <div className="card-container" key={id}>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}`} />
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