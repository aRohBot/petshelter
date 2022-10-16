import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AllPets = (props) => {

    const {pets, setPets} = props

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
        .then((res)=>{
            console.log(res)
            setPets(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const DeleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log(res)
                const filterPets = pets.filter(pet => {
                    return pet._id !== id
                })
                setPets(filterPets)
            }).catch((err)=>{
                console.log(err)
            })
    }

    return(
        <div >
            <h3 className=''>These pets are looking for a good home</h3>
            <div className='d-flex justify-content-center'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.sort((a,b)=>a.type.localeCompare(b.type)).map((pet, index)=>{
                                return (
                                    <tr key={pet._id}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <Link to={`/pets/${pet._id}`}><button>details</button></Link>|
                                            <Link to={`/pets/${pet._id}/edit`}><button>Edit</button></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllPets