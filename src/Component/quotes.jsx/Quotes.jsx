import React from "react";
import { useNavigate } from "react-router-dom";

function Quotes(props) {
  let navigate = useNavigate();
  function showQuoteHandler(id) {
    navigate(`/quotes/${id}`)
  }
  return (
    <div className="quote">
      <div className="quote-text">
        <h2> <span>Quote🔊 :-</span> {props.text}</h2>
        <h3> <span>Author :-</span> {props.author}</h3>
      </div>
      <button onClick={()=>showQuoteHandler(props.id)}>View more</button>
    </div>
  );
}

export default Quotes;
