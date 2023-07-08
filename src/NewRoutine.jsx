import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { postRoutines } from './server';

const NewRoutine = () => {
    const [isPublic,setIsPublic] = useState(false);
    const [errorText, setErrorText] = useState("");
    const handleChange = (event) => {
        setIsPublic(event.target.value);
      };
    const handleSubmit=async(event)=>{
        event.preventDefault();

        // Try so we can catch the error
        try {
            const token = sessionStorage.getItem("token")
            const data = new FormData(event.currentTarget);
            console.log({
              name: data.get('name'),
              goal: data.get('goal'),
              isPublic:isPublic,
            });
            const response = await postRoutines(token, data.get('name'), data.get('goal'), isPublic)
            if (response.error) {
                throw Error("Failed to create routine")
            } else {
                setErrorText("");
            }
            console.log(response)
            
        } catch (err) {
            setErrorText(err.message)
        }
    }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        {errorText && <p>{errorText}</p>}
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
      type="text"
      id="goal"
    />
    <InputLabel id="demo-simple-select-label">isPublic</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={isPublic}
    label="isPublic"
    onChange={handleChange}
    >
    <MenuItem value={true}>true</MenuItem>
    <MenuItem value={false}>false</MenuItem>
  </Select>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Add Routine
    </Button>
  </Box>  )
}

export default NewRoutine