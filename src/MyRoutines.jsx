import React, { useEffect, useRef, useState } from 'react'
import { deleteRoutines, updateRoutines, userRoutines } from './server'
import NewRoutine from './NewRoutine'
import { Box, Button, Grid, TextField } from '@mui/material'


const MyRoutines = () => {
    const [myRoutines, setMyRoutines] = useState([])
    const [showUpdate, setShowUpdate] = useState(false)
    const routineId = useRef(0)
    useEffect(() => {
        const getMyRoutines = async ()=>{
            let username = sessionStorage.getItem('username')
            let token = sessionStorage.getItem('token')
            const result = await userRoutines(username, token)
            setMyRoutines(result)
            console.log(result)
        }
        getMyRoutines()
    }, [])
    const handleDelete = async(id)=>{
      const token = sessionStorage.getItem("token")
      const response = await deleteRoutines(token, id)
    }
    const handleEdit = async(id)=>{
      setShowUpdate(true)
      routineId.current = id
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get('name'),
        goal: data.get('goal'),
      });
      const token = sessionStorage.getItem("token")
      const response = await updateRoutines(token, routineId.current, data.get('name'), data.get('goal'))
      console.log(response)
      setShowUpdate(false)
    };
  return (
    <div>
      <h2>MyRoutines</h2>
      <NewRoutine />
    {
      myRoutines && myRoutines.map((routine, key)=>{
        return(
          <div className='box' key = {key}> 
            <h3>
              {routine.name}
            </h3>
            <p>{routine.goal}</p>
            <p>{routine.isPublic}</p>
            <button onClick={()=>{handleEdit(routine.id)}}>
              Update
            </button>
            <button onClick={()=>{handleDelete(routine.id)}}>
              Delete
            </button>
            {showUpdate && <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="goal"
              label="Goal"
              id="goal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
          }
          </div>
        )
      })
    }
    </div>
  )
}

export default MyRoutines

