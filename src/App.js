
import './App.css';
import {List} from './component/list'
import {Header} from './component/Header'

function App() {
  let mobile=["Android","Blackberrry","iphone","Windows Phone"]
  let manu=["Samsung","Htc","Micromax","'Apple"]

  return (
    <div className="App">
      <Header head={"Mobile Operating System"}/>
      <List data={mobile}/>

      <Header head={"Mobile Manufactors"}/>
      <List data={manu}/>
    </div>
  );
}

export default App;
