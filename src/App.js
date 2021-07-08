import logo from './logo.svg';
import './App.css';

import PersonCard from './components/personCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName ="John" lastName="Smith" age={88} hairColor="Brown"/>
      <PersonCard firstName ="Kris" lastName="Bratvold" age={28} hairColor="Blonde"/>
      <PersonCard firstName ="Millard" lastName="Guy" age={50} hairColor="Brown"/>
      <PersonCard firstName ="Bob" lastName="Lee" age={45} hairColor="Red"/>
    </div>
  );
}

export default App;
