import { useState } from "react";

import "./styles.css";
export default function Images({ image }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="images">
      <img
        src={image}
        alt=""
        onClick={handleClick}
        className={clicked && "emote"}
      />
    </div>
  );
}
