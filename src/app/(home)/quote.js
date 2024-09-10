import Image from "next/image";

export default function Quote({ image, quote, quoter }) {
  return (
    <div className="quote">
      <div className="quoter-image">
        <Image src={`/${image}`} alt={quoter} fill />
      </div>
      <div className="quote-section">
        <h3 className="quote-text">&quot;{quote}&quot;</h3>
        <div className="quoter">
          <h4 className="tag">GM</h4>
          <h3 className="quoter-name">{quoter}</h3>
        </div>
      </div>
    </div>
  );
}
