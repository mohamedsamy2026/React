import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Materail() {
  return (
    <Stack spacing={2} direction="row" sx={{margin:"20rem"}}>
      <Button variant="text">Text</Button>    
      <Button variant="contained" color="primary" sx={{color:"white",fontWeight:"bold"}}>Primary Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

