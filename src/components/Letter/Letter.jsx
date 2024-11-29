import "./styles.css";
export default function Letter({ letter }) {
  return (
    <div className="letter">
      <p>{letter}</p>
    </div>
  );
}
