import { useSound } from "use-sound";

import Images from "../../components/Images/Images";
import Letter from "../../components/Letter/Letter";
import mySound from "../../assets/audios/spider.mp3";

import "./styles.css";

function MyButton() {
  const [playSound] = useSound(mySound);

  return <button onClick={() => playSound()}>Play Sound</button>;
}
export default function GameView() {
  return (
    <div className="container">
      <Letter letter={"A"} />
      <Images />
      <MyButton />
    </div>
  );
}
