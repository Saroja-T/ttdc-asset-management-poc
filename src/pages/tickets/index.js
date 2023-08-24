// material-ui
import React from 'react';

import {
  Grid,Button,Modal,
  IconButton,
  Box,
  TextField,  
  Stack,
  Typography,
  InputLabel,
 
} from '@mui/material';

// project import
import TicketsTable from './TicketsTable';
import MainCard from 'components/MainCard';



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const TicketsDefault = () => {

  const [open, setOpen] = React.useState(false);

 
    const handleClose = () => {
        setOpen(false);
    };
   
    const handleOpen = () => {
        setOpen(true);
    };
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      bottom: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 7,
      border: 'none',
      minHeight: '60vh',
      overflow: 'scroll',
      display: 'block',
    };

   


  return (
    <Grid  >
     <Grid container alignItems="right" justifyContent="flex-end">
     <Button variant="contained" sx={{backgroundColor: "#632b8f", }} onClick={handleOpen}>Add new ticket</Button>
        </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        
        <MainCard sx={{ mt: 3 }} content={false}>
          <TicketsTable />
        </MainCard>
      </Grid>
      
      <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <IconButton onClick={() => handleClose()} edge="end" style={{ float: 'right', marginTop: '-30px' }}>
                {/* <Iconify icon={'ant-design:close-outlined'} /> */}
              </IconButton>
              <Typography variant="h4" color="inherit" textAlign="center">Ticket Details</Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={10}>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel >Issue</InputLabel>
                  <Stack spacing={1} sx={{ width: '100%' }}>
                    <TextField
                      name="comment_title"
                      variant="filled"
                      size="small"
                      onChange={() => {
                        
                      }}/>
                  </Stack>
                </Stack>
              </Stack>
              <Stack spacing={20}>
              <InputLabel style={{marginTop:'20px'}}>Discription</InputLabel>

<TextField
  id="filled-multiline-static"
  label="Type here"
  name="comments"
  multiline
  fullWidth
  rows={4}
  variant="filled"
  onChange={() => {
   
  }}
  style={{
    marginTop: '15px',
  }}
 
/>
              </Stack>
              

              <Box display="flex" justifyContent="center" style={{ paddingTop: '5vh' }}>
                <Button
                sx={{marginRight:'24px'}}
                  variant="contained"
                  onClick={() => handleClose()}
                >
                  CANCEL
                </Button>
                <Button variant="contained"  onClick={() => handleClose()}>
                  {/* disabled={status !== undefined ? status : false} */}
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </Modal>
    </Grid>
    
  );
};

export default TicketsDefault;
