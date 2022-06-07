import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import { animal } from './data.js';

function App() {
  return (
    <div className="App">
      <Header className="App-header" name='Colter' />
      <Main animals={animal} />
      <Footer year='2022' />
    </div>
  );
}

export default App;
