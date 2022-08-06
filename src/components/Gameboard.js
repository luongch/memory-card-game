import '../styles/gameBoard.css'

function Gameboard(props) {
    let {cards,handleClick} = props 
    return (
      <div className="gameBoard">
        {cards.map(card => {

            return <div className='card' onClick={handleClick}>
                <img alt={card.alt} src={card.src} width="200px"></img>
            </div>
        })}
      </div>
    );
  }
  
  export default Gameboard;
  