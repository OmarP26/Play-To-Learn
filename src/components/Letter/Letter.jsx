import "./styles.css";
export default function Letter({ letter, clickSound }) {
  return (
    <div className="letter" onClick={clickSound}>
      <p>{letter}</p>
    </div>
  );
}
