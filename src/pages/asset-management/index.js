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



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const AssetsDefault = () => {

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} >
     {/* <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h4" color="#632b8f"> Botanical Garden</Typography>
        </Grid> */}

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        
        <MainCard sx={{ mt: 3 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4} style={{ marginTop: "20px" }} >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" color="#632b8f">Government Botanical Garden</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
        <Paper style={{maxHeight: 500, overflow: 'auto'}}>
        <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }} >
            <ListItemButton divider>
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
            </ListItemButton>

          </List>
          </Paper>
         
        </MainCard>
      </Grid>

    </Grid>
  );
};

export default AssetsDefault;
