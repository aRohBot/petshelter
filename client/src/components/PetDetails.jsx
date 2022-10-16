import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const PetDetails = (props) => {
    const navigate = useNavigate()
    const [pet, setPet] = useState({})
    const {id} = useParams()
    const {pets, setPets} = props


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res)=>{
                console.log(res)
                setPet(res.data)
            }).catch((err)=>{console.log(err)})
    },[])

    const DeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res)
                const filterPets = pets.filter(pet => {
                    return pet._id !== id
                })
                setPets(filterPets)
                navigate('/')
            }).catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div>
            <div className='d-flex justify-content-center'>
                <h2>Details about: {pet.name}</h2>
                <button onClick={(e)=>DeleteHandler(pet._id)}>Adopt {pet.name}</button>
            </div>
            <div className='container'>
                <h3>Pet Type: {pet.type}</h3>
                <h3>Description: {pet.description}</h3>
                <h3>Skills:<li>{pet.skill1}</li><li>{pet.skill2}</li><li>{pet.skill3}</li></h3>
                <h3>{pet.likes} likes</h3>
            </div>
        </div>
    )
}

export default PetDetails