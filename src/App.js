import logo from './logo.svg';
import './App.css';
import Header from  '../src/components/Header';
import AddWidget from  '../src/components/AddWidget';
import DisplayWidget from './components/DisplayWidget';


function App() {
  return (
    <div className='App'>
      <Header/>
      <DisplayWidget/>
    </div>
  );
}

export default App;
