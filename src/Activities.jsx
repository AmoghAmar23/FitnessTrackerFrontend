import React, { useEffect, useRef, useState } from 'react'
import { fetchActivities, updateActivities } from './server'
import NewActivity from './NewActivity'
import { Box, Button, TextField } from '@mui/material'

const Activities = () => {
    const [activities, setActivities] = useState([])
    const [showUpdate, setShowUpdate] = useState(false)
    const activityId = useRef(0)
    
    useEffect(() => {
        const getActivities = async ()=>{
            const result = await fetchActivities()
            setActivities(result)
        }
        getActivities()
    }, [])
      const handleEdit = async(id)=>{
        setShowUpdate(true)
        activityId.current = id
      }
      const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          name: data.get('name'),
          description: data.get('description'),
        });
        const token = sessionStorage.getItem("token")
        const response = await updateActivities(token, activityId.current, data.get('name'), data.get('description'))
        console.log(response)
        setShowUpdate(false)
      };
    return (
        <div>
            <h2>Activities</h2>
            <NewActivity/>
            {activities && activities.map((activity,key) => {
                return (<div key={key}>
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                    <button onClick={()=>{handleEdit(activity.id)}}>
              Update
            </button>
           
                </div>
                )
            })}

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
              name="description"
              label="Description"
              id="description"
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
}

export default Activities