
import React from 'react';

import { useState,useEffect } from 'react';

// material-ui
import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
  Button,
  Modal,
  IconButton,
  Box,
  TextField,  
  Stack,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import MainCard from 'components/MainCard';
import assetData from '../../assets/local-json/assetsData.json'




const AssetsDefault = () => 
{


const [assetId, setAssetId] = useState(1);
useEffect(()=>{
  console.log("================>",assetId);
},[assetId])

// ==============================|| DASHBOARD - DEFAULT ||============================== //

function  handleLanguage (value){
    setAssetId(value);
  }
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
    <Grid container rowSpacing={4.5} columnSpacing={2.75} >
     {/* <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h4" color="#632b8f"> Botanical Garden</Typography>
        </Grid> */}

      {/* row 3 */}
      <Grid container alignItems="right" justifyContent="flex-end">
     <Button variant="contained" sx={{backgroundColor: "#632b8f", }} onClick={handleOpen}>Add new Asset</Button>
        </Grid>
      <Grid item xs={12} md={7} lg={8}>
        
        <MainCard sx={{ mt: 3 }} content={false}>
          <OrdersTable  onSelectLanguage={handleLanguage} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4} style={{ marginTop: "20px" }} >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" color="#632b8f">{assetData[assetId-1].name}</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
        <Paper style={{maxHeight: 500, overflow: 'auto'}}>

        
        <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }} >
              {
            assetData && assetData[assetId-1].assets.length>0 && assetData[assetId-1].assets.map((item)=>
            <>
              <ListItemButton divider>
                <ListItemText primary={item.assets_name} />
                <Typography variant="h5">{item.count}</Typography>
              </ListItemButton>
            </>
            )
          }
            {/* <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">20</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">58</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">20</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">20</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">20</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">20</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">12</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">20</Typography>
            </ListItemButton> */}

          </List>
          </Paper>
         
        </MainCard>
      </Grid>
      <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <IconButton onClick={() => handleClose()} edge="end" style={{ float: 'right', marginTop: '-30px' }}>
                {/* <Iconify icon={'ant-design:close-outlined'} /> */}
              </IconButton>
              <Typography variant="h4" color="inherit" textAlign="center">Add Assets</Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5 }>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel >Asset ID</InputLabel>
                  <Stack spacing={1} sx={{ width: '100%' }}>
                    <TextField
                      value="2555636"
                      name="comment_title"
                      variant="filled"
                      size="small"
                      disabled
                      onChange={() => {
                        
                      }}/>
                  </Stack>
                </Stack>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel >Counts</InputLabel>
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
              <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel style={{marginTop:'10px'}}>Asset Category</InputLabel>
                  <Stack spacing={1} sx={{ width: '100%' }}>
                  <Select
        sx={{
       marginTop:35,        
          height: 50,
        }}
      >
        <MenuItem value={1}>Hotels</MenuItem>
        <MenuItem value={2}>Tours & Packages</MenuItem>
        <MenuItem value={3}>Beach</MenuItem>
        <MenuItem value={4}>Backwaters</MenuItem>
        <MenuItem value={5}>Museums</MenuItem>
      </Select>
                  </Stack>
                </Stack>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel style={{marginTop:'10px'}}>Department</InputLabel>
                  <Stack spacing={1} sx={{ width: '100%' }}>
                  <Select
        sx={{
       marginTop:35,        
          height: 50,
        }}
      >
        <MenuItem value={1}>Government Botanical Garden</MenuItem>
        <MenuItem value={2}>4 Days Kodaikkanal</MenuItem>
        <MenuItem value={3}>Covelong Beach</MenuItem>
        <MenuItem value={4}>Hotel Tamilnadu</MenuItem>
        <MenuItem value={5}>Pichavaram Backwaters</MenuItem>
      </Select>
                  </Stack>
                </Stack>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel style={{marginTop:'10px'}}>Location</InputLabel>
                  <Stack spacing={1} sx={{ width: '100%' }}>
                  <Select
        sx={{
       marginTop:35,        
          height: 50,
        }}
        label="Select Location"
      >
        <MenuItem value={1}>Thirunelveli</MenuItem>
        <MenuItem value={2}>Kodaikkanal</MenuItem>
        <MenuItem value={3}>Covelong</MenuItem>
        <MenuItem value={4}>Thiruvannamalai</MenuItem>
        <MenuItem value={5}>Kancheepuram</MenuItem>
      </Select>
                  </Stack>
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

export default AssetsDefault;
