import UserContext from './context/UserContext';
import './App.css';
import MoreInfo from './components/MoreInfo';

function App () {

  const userData = {
    name: "kevin",
    years: 28
  };

  
  return (
    <UserContext.Provider value={ userData }>

      <div className="App">
        <h1>Use context</h1>
        <MoreInfo />

      </div>
    </UserContext.Provider>
  );
}

export default App;
