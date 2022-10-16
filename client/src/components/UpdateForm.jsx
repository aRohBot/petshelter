import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateForm = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [pet, setPet] = useState({})
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    const [likes, setLikes] = useState(0)
    const [errors, setErrors] = useState({})
    const [notFoundError, setNotFoundError] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res)=>{
                console.log(res)
                setPet(res.data)
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
                setLikes(res.data.likes)
            }).catch((err)=>{
                console.log(err)
                setNotFoundError(`Pet with that ID not Found`)
            })
    },[])

    const UpdateHandler =(e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
            likes
        }).then((res) => {
            navigate("/")
        }).catch((err)=>{
            setErrors(err.response.data.err.errors)
        })
    }

    return(
        <div>
            <h3 style={{color: 'purple', padding: 20}}>Edit {pet.name}</h3>
            <div className='container' style={{border:'2px solid black', padding:'20px'}}>
                <form onSubmit={UpdateHandler}>
                    <label>Name:</label>
                        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} style={{margin:'20px'}}/>
                        {errors.name ? <p className='text text-danger'>{errors.name.message}</p> : null}
                    <label>Type:</label>
                        <input type="text" name="type" value={type} onChange={(e)=>setType(e.target.value)} style={{margin:'20px'}}/>
                        {errors.type ? <p className='text text-danger'>{errors.type.message}</p> : null}
                    <label>Decription:</label>
                        <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} style={{margin:'20px'}}/>
                        {errors.description ? <p className='text text-danger'>{errors.description.message}</p> : null}
                    <div className='container'>
                        <label>Skill 1:</label>
                            <input type="text" name="skill1" value={skill1} onChange={(e)=>setSkill1(e.target.value)} style={{margin:'20px'}}/>
                            {errors.skill1 ? <p className='text text-danger'>{errors.skill1.message}</p> : null}
                        <label>Skill 2:</label>
                            <input type="text" name="naskill2me" value={skill2} onChange={(e)=>setSkill2(e.target.value)} style={{margin:'20px'}}/>
                            {errors.skill2 ? <p className='text text-danger'>{errors.skill2.message}</p> : null}
                        <label>Skill 3:</label>
                            <input type="text" name="skill3" value={skill3} onChange={(e)=>setSkill3(e.target.value)} style={{margin:'20px'}}/>
                            {errors.skill3 ? <p className='text text-danger'>{errors.skill3.message}</p> : null}
                    </div>
                        <input type="hidden" name="likes" value={likes}/>
                    <button type="submit">Edit Pet</button>
                </form>
            </div>
        </div>
    )

}

export default UpdateForm