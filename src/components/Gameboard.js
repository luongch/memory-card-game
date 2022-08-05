
function Gameboard(props) {
    let {cards} = props 
    return (
      <div>
        {cards.map(card => {
            let source = card
            return <img alt="test" src={source} width="200px"></img>
        })}
      </div>
    );
  }
  
  export default Gameboard;
  