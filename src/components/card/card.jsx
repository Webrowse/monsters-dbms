
import './card.css';
const CardRender = ({ monsters : { name, email, id } }) => {
    
   // const { name, email, id } = monsters;
    
        return(
                    <div className="card-container" key={id}>
                        <img alt={`monster ${name}`} 
                        src={`https://robohash.org/${id}/set1`} />
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                )
        
        }

export default CardRender;