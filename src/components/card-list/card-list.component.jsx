import { Component } from "react";

class CardList extends Component {
    render() {
        const monst = this.props;
        return (
            <div>
                {filterMonster.map((monst) => (
                <h1 key={monst.id} >{filterMonster.name}</h1>
            ))}
            
        </div>
        );
    }
}
export default CardList;