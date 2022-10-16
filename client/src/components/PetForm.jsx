import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PetForm = (props) => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    const [likes, setLikes] = useState(0)
    const [errors, setErrors] = useState({})

    const SubmitHandler =(e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pets',{
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
            <h3 style={{color: 'purple', padding: 20}}>Know a pet needing a home?</h3>
            <div className='container' style={{border:'2px solid black', padding:'20px'}}>
                <form onSubmit={SubmitHandler}>
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
                    <button type="submit">Add Pet</button>
                </form>
            </div>
        </div>
    )

}

export default PetForm