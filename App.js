import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  
  const [time, setTime] = useState(new Date())
  const [information , setInformation ] = useState([])
  const [eventCode, setEventCode] = useState([])

  async function getInformation(){
    let response = await fetch("https://api.statbotics.io/v2/match/"+eventCode)
    let data = await response.json();
    console.log(data)
    setInformation(data);
  }

  useEffect(()=>{
    setInterval(()=>setTime(new Date()), 1000)
  },[])


  return (
    
    <div className="App">

    <style>{'body { background-color: lightgrey;}'}</style>

      <input 
      type="text" 
      placeholder="Event Code" 
      onChange={(ec)=>{
        setEventCode(ec.target.value);
        console.log(ec.target.value);
      }} 
      />

	//Example event codes to test: '2019ncwak_f1m1', '2022cmptx_f1m1'

    <button onClick={getInformation}>Get Information</button>
    <h1 style={{ margin: '0', padding: '0', lineHeight: '2' }}> {eventCode}</h1>
    <p style={{ margin: '0', padding: '0', lineHeight: '2'}}>
      {time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}, {time.toLocaleTimeString()}
    </p>

    
    
    <table bgcolor='Black' width={670} align="center">
      <tr bgColor ="white" align="center">
        <th width="100">Alliance</th>
        <th width="100">Auto Score</th>
        <th width="70">Teleop Score</th>
        <th width="100">Endgame Score</th>
        <th width="100">Fouls</th>
        <th width="100">Total Score</th>
        <th width="100">Net EPA</th>
      </tr>

      <tr bgcolor="salmon" align="center">
        <td>Red</td>
        <td>{information["red_auto"]}</td>
        <td>{information["red_teleop"]}</td>
        <td>{information["red_endgame"]}</td>
        <td>{information["red_fouls"]}</td>
        <td>{information["red_score"]}</td>
        <td>{information["red_epa_sum"]}</td>
	    </tr>

      <tr bgcolor="cornflowerblue" align="center">
      <td>Blue</td>
        <td>{information["blue_auto"]}</td>
        <td>{information["blue_teleop"]}</td>
        <td>{information["blue_endgame"]}</td>
        <td>{information["blue_fouls"]}</td>
        <td>{information["blue_score"]}</td>
        <td>{information["blue_epa_sum"]}</td>
	    </tr>
    </table>
    
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <table bgcolor="black" width="140" style={{ marginLeft: '340px' }}>
      <tr bgcolor="white" align="center">
        <td bgColor="#e89c9c">{information['red_1']}</td>
        <td bgColor ="#9fbeec">{information['blue_1']}</td>
        </tr>
      <tr bgcolor="salmon" align="center">
        <td bgColor ="#e78a70 ">{information['red_2']}</td>
        <td bgColor = "#15c9ef">{information['blue_2']}</td>
      </tr>
      <tr bgcolor="cornflowerblue" align="center">
        <td bgColor="crimson"> {information['red_3']}</td>
        <td>{information['blue_3']}</td>
      </tr>
  </table>


  
  <iframe
    title="YouTube Video"
    width="480"
    height="315"
    style={{marginLeft:'175px', marginTop: '-150px'}}
    src={`https://www.youtube.com/embed/${information['video']}`}
    frameBorder="0"
    allowFullScreen
  ></iframe>

  <table bgcolor="lightgrey" width="500" height="350" border="1" style={{ marginLeft: '520px', marginTop: '-350px'}}>
      <tr bgcolor="lightgrey" align="center">
        </tr>
  </table> 
  
      </div>
  );

  
}

export default App;
