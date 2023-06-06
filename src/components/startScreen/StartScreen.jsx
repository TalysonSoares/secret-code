import "./StartScreen.css";
import { useLottie } from "lottie-react";
import logoReact from "./logoReact.json";

const StartScreen = ({ startGame }) => {
    const options = {
      animationData: logoReact,
      loop: true
    };

    const style = {
      heigth: 300,
      width: 300
    }

    const { View } = useLottie(options, style);

  return <div className="start">
        <h1>Secret Code</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick={startGame}>Começar o jogo</button>
        <div className="logo">
         {View}
        </div>
    </div>
}

export default StartScreen