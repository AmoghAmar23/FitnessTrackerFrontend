import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { postActivities } from './server';

const NewActivity = () => {
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const token = sessionStorage.getItem("token")
        const data = new FormData(event.currentTarget);
        console.log({
          name: data.get('name'),
          description: data.get('description'),
        });
        const response = await postActivities(token, data.get('name'), data.get('description'))
        console.log(response)
    }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
      type="text"
      id="description"
      multiline
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      Add Activity
    </Button>
  </Box>  )
}

export default NewActivity