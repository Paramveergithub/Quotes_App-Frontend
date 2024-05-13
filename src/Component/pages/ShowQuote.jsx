import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../../Urls';
import "../../App.css";

function ShowQuote() {
  let [quote, setQuote] = useState({author: "", text: ""})
  const params = useParams();
  useEffect(()=>{
    async function fetchQuote(){
      let res = await axios.get(`${baseUrl}/quotes/${params.id}`);
      let {author, text} = res.data;
      setQuote({author, text});
    }
    fetchQuote();
  }, []);

  return (
    <div className='separate'>
      <h2>{quote.text}</h2>
      <p>*** By - {quote.author} ***</p>
    </div>
  );
}

export default ShowQuote