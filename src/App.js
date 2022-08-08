import './App.css';
import ToolbarList from './ToolbarList';

function App() {
  return (
    <ToolbarList
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      onSelectFilter={(filter) => {console.log(filter);}}/>
  );
}

export default App;
