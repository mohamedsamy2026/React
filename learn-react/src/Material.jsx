import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Materail() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>    
      <Button variant="contained" color="secondary">Primary Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

