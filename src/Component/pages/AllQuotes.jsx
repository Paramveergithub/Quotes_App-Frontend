import React, { useEffect, useState } from 'react'
import axios from "axios";
import Quotes from '../quotes.jsx/Quotes';
import { baseUrl } from '../../../Urls';

function AllQuotes() {
  let [quotes, setQuotes] = useState([]);

  useEffect(function(){
    async function getQuotes(){
      const res = await axios.get(`${baseUrl}/allquotes`);
      // console.log(res.data, "api he");
      setQuotes(res.data);
    }
    getQuotes();
  }, []);

  return (
    <div className='allQuotes'>
      <h1>All Quotes</h1>
      <ul>
        {quotes.map((quote, index) => {
          return(
             <Quotes id={quote._id} key={quote._id} text={quote.text} author={quote.author} />
          );
        })}
      </ul>
    </div>
  );
}

export default AllQuotes