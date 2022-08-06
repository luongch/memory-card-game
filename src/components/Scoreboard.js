
function Scoreboard(props) {
    let {score} = props;
    return (
      <div>
        <div>Current: {score.current}</div>
        <div>Highest: {score.highest}</div>
      </div>
    );
  }
  
  export default Scoreboard;
  