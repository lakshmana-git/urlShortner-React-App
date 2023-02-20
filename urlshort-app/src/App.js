import axios from "axios";
import React, { useState } from "react";
import {Home} from './Home';
import './App.css';
import { Header } from './Header';
import {Footer} from './Footer';
function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [url,setUrl] =useState([])
  const fetchData = async () => {
    try {
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${input}`);
      setResult(res.data.result.full_short_link)
      setUrl((prevUrls)=>[...prevUrls,input])
      ;
    } catch (err) {
      alert(err);
    }
  };
  console.log(url)

  const handler = () => {
    fetchData();
    setInput("");
    console.log(input);
  };
  return ( <>
    <Header/>
    <Home handler={handler} input={input} setInput={setInput} result={result} url={url}/>
    <Footer/>
    
    
    
  </>
  );
}

export default App;
