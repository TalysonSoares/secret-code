import "./GameOver.css"
import Lottie from "lottie-react";
import astronaut from "./astronaut.json";

const GameOver = ({ retry, score }) => {
  const options = {
    animationData: astronaut,
    loop: true
  };

  return (
    <div className="gameOver">
      <h1>Game Over</h1>
      <h2>A sua pontuação foi: <span>{score}</span></h2>
      <button onClick={retry}>Jogar novamente</button>
      <div className="astronaut">
        <Lottie animationData={astronaut} loop={true} />
      </div>
    </div>
  )
}

export default GameOver