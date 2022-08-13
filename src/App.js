import './App.css';
import Toolbar from './Toolbar/Toolbar';

function App() {

  return (
    <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      onSelectFilter={(filter) => {console.log(filter);}}/>
  );
}

export default App;
