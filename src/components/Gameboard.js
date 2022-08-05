import '../styles/gameBoard.css'

function Gameboard(props) {
    let {cards,handleClick} = props 
    return (
      <div className="gameBoard">
        {cards.map(card => {
            let source = card
            return <div className='card' onClick={handleClick}>
                <img alt="test" src={source} width="200px"></img>
            </div>
        })}
      </div>
    );
  }
  
  export default Gameboard;
  