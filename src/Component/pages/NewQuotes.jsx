import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../Urls";
import "../../App.css";

function NewQuotes() {
  let nevigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  async function handleFormSubmit(e) {
    e.preventDefault();
    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;
    try {
      let res = await axios.post(`${baseUrl}/addquotes`, {
          author,
          text
        })
        nevigate('/')
    }catch (e) {
      console.log("can't create quote");
    }
  }


  return (
    <div className="newQuote">
      <form onSubmit={handleFormSubmit}>
        <div className="quoteBox">
          <label className="inpt" htmlFor="text">Quote :- </label>
          <textarea
            id="text"
            cols="25"
            rows="2"
            placeholder="Author's Quote" ref={quoteInputRef}
          ></textarea>
        </div>
        <div className="authorBox">
          <label className="inpt" htmlFor="author">Author:- </label>
          <input type="text" placeholder="Author's name" id="author" ref={usernameInputRef} />
        </div>
          <button>Add Quote</button>
      </form>
    </div>
  );
}

export default NewQuotes;