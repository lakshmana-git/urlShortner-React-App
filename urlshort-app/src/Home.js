import './App.css';



export const Home = ({handler,input,setInput,result,url})=>{
   const handlerCpy=()=>{
    var copyText = document.getElementById("cpy");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999);

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  console.log(copyText.value)
  if(copyText.value.length===0){
   alert("No Short Url:Enter url " + copyText.value)
  }
  else{
    alert("Copied the text : " + copyText.value);
  }   
   }
    return(
         <div className="home-section">
            <div className="home-section-div">
                <div className='home-section-inside'>
                      <h1 className='home-section-inside-head'>More than a shortner links</h1>
                      <h4 >Build your brand recognition and get detailed insights on how your links are performing</h4>
                </div>
                <img alt="dev img" className="home-section-img" src="https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg?w=740&t=st=1676390574~exp=1676391174~hmac=a8be9c0b77b97d758e212e280e561cb1d94b880a31b2d9c5c1fe98f7c9b5f38b"/>
            </div>

            <div className="home-card">
                 <div className="home-card1">
                  <form>
                    <input className="home-card-input"
                    type="text"
                    placeholder="Enter url here"
                    value={input}
                    required
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}/>
                    <button className="home-card-button" onClick={handler}>Shorten!</button>
                    </form>
                 </div>
            </div>
            <div className="home-card-2">
                <div className="home-card-2-div">
                 <div className="home-card-2-inside">
                 
                    <input className='home-card-2-input' type="text"
                      required
                      value={url[url.length-1]}/>
                    <div>
                     <form>
                        <input
                        className='home-card-2-input-result'
                        id="cpy"
                        required
                        type="text"
                        value={result}/>
                        <button className="home-card-2-input-button" onClick={handlerCpy}>Copy 😉</button>
                        </form>
                    </div>
                 </div>
            </div>
            </div>

         </div>
    )
}