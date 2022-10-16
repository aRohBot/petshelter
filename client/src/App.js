import './App.css';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import Nav from './components/Nav'
import PetForm from './components/PetForm';
import UpdateForm from './components/UpdateForm';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from 'react'

function App() {
  const [pets, setPets] = useState([])


  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<AllPets pets={pets} setPets={setPets}/>}/>
          <Route path="/pets/:id" element={<PetDetails pets={pets} setPets={setPets}/>}/>
          <Route path="/pets/new" element={<PetForm/>}/>
          <Route path="/pets/:id/edit" element={<UpdateForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
