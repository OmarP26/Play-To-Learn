import { useEffect, useState, useRef } from "react";

import Images from "../../components/Images/Images";
import Letter from "../../components/Letter/Letter";

import "./styles.css";

const alphabet = [
  {
    letter: "A",
    media: "arana",
  },
  {
    letter: "B",
    media: "barco",
  },
  {
    letter: "C",
    media: "casa",
  },
  {
    letter: "D",
    media: "dormir",
  },
  {
    letter: "E",
    media: "elefante",
  },
  {
    letter: "F",
    media: "foca",
  },
  {
    letter: "G",
    media: "galleta",
  },
  {
    letter: "H",
    media: "humo",
  },
  {
    letter: "I",
    media: "iglesia",
  },
  {
    letter: "J",
    media: "jugar",
  },
  {
    letter: "K",
    media: "kilo",
  },
  {
    letter: "L",
    media: "limon",
  },
  {
    letter: "M",
    media: "mano",
  },
  {
    letter: "N",
    media: "naranja",
  },
  {
    letter: "O",
    media: "oso",
  },
  {
    letter: "P",
    media: "paleta",
  },
  {
    letter: "Q",
    media: "queso",
  },
  {
    letter: "R",
    media: "rojo",
  },
  {
    letter: "S",
    media: "sillon",
  },
  {
    letter: "T",
    media: "tortuga",
  },
  {
    letter: "U",
    media: "uva",
  },
  {
    letter: "V",
    media: "verde",
  },
  {
    letter: "W",
    media: "willy",
  },
  {
    letter: "X",
    media: "xolo",
  },
  {
    letter: "Y",
    media: "yogui",
  },
  {
    letter: "Z",
    media: "zanahoria",
  },
];

export default function LettersView() {
  const [currentLetter, setCurrentLetter] = useState(0);
  const [imageSrc, setImageSrc] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = async () => {
    try {
      console.log("Playing sound for letter:", alphabet[currentLetter].letter);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      const soundPath = await import(
        `../../assets/audios/${alphabet[currentLetter].media}.mp3`
      );

      const audio = new Audio(soundPath.default);
      audioRef.current = audio;
      audio.play();
    } catch (error) {
      console.error("Error loading sound:", error);
    }
  };

  function nextLetter() {
    if (currentLetter < alphabet.length - 1) {
      setCurrentLetter(currentLetter + 1);
      return;
    } else {
      setCurrentLetter(0);
    }
  }

  function prevLetter() {
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter - 1);
      return;
    } else {
      setCurrentLetter(alphabet.length - 1);
    }
  }

  useEffect(() => {
    const extensions = ["png", "jfif", "jpeg", "jpg"];
    const loadImage = async () => {
      for (const ext of extensions) {
        try {
          const imagePath = await import(
            `../../assets/images/${alphabet[currentLetter].media}.${ext}`
          );
          setImageSrc(imagePath.default);
          return;
        } catch (error) {
          // Continue to the next extension if this one fails
        }
      }
      console.error(
        `Image for ${alphabet[currentLetter].media} not found with any supported extensions`
      );
      setImageSrc(null);
    };

    loadImage();
  }, [currentLetter]);

  return (
    <div className="container">
      <Letter letter={alphabet[currentLetter].letter} clickSound={handlePlay} />
      <Images image={imageSrc} />
      <button className="next" onClick={() => nextLetter()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 6l6 6-6 6" />
        </svg>
      </button>
      <button className="prev" onClick={() => prevLetter()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14 6l-6 6 6 6" />
        </svg>
      </button>
    </div>
  );
}
