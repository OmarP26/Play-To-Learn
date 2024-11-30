import "./styles.css";
export default function Images({ image }) {
  return (
    <div className="images">
      <img src={image} alt="" />
    </div>
  );
}
