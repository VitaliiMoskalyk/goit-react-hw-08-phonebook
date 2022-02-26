import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Spinner() {
  return (
    <Box sx={{ width: '100%', position: 'fixed', top: '0', zIndex: '2' }}>
      <LinearProgress style={{ height: '10px' }} />
    </Box>
  );
}
