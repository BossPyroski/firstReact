import logo from './logo.svg';
import './App.css';
import FirstComponent from './component/FirstComponent';
function App() {

  return (
<div className="App">


      <FirstComponent firstName="Jane" lastName="doe" age={24} hairColor="brown"/>
      <FirstComponent firstName="Harry" lastName="Pothead" age={12} hairColor="black"/>
      <FirstComponent firstName="Steph" lastName="Sanduski" age={34} hairColor="blue"/>
      <FirstComponent firstName="Sirius" lastName="Black" age={81} hairColor="black"/>
      
</div>

  );
}



export default App;
