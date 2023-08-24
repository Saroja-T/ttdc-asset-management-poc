
import { useState,useEffect } from 'react';

// material-ui
import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Paper
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import MainCard from 'components/MainCard';
import assetData from '../../assets/local-json/assetsData.json'




const AssetsDefault = () => {


const [assetId, setAssetId] = useState(1);
useEffect(()=>{
  console.log("================>",assetId);
},[assetId])

// ==============================|| DASHBOARD - DEFAULT ||============================== //

function  handleLanguage (value){
    setAssetId(value);
  }

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} >
     {/* <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h4" color="#632b8f"> Botanical Garden</Typography>
        </Grid> */}

      {/* row 3 */}
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

    </Grid>
  );
};

export default AssetsDefault;
