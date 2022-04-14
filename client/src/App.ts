
import React from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
         <AppNavBar/>
         <ShoppingList/>
     </div>
  );
}
export default App;
