import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Inventory from './Components/Inventory/Inventory';


const mockInventory = [
  {title: 'shoes', brand: 'nike', price: '$121', quantity: '28', color: 'black'}
]

function App() {
  return (
    <div className="App">
      <Dashboard inventory={mockInventory}/>
      <Inventory inventory={mockInventory}/>
    </div>
  );
}

export default App;
