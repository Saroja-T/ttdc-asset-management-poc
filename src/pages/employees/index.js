// material-ui
import {
  Grid,
} from '@mui/material';

// project import
import EmployeesTable from './EmployeesTable';
import MainCard from 'components/MainCard';



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const EmployeesDefault = () => {

  return (
    <Grid  >
     {/* <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="h4" color="#632b8f"> Botanical Garden</Typography>
        </Grid> */}

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        
        <MainCard sx={{ mt: 3 }} content={false}>
          <EmployeesTable />
        </MainCard>
      </Grid>
      

    </Grid>
  );
};

export default EmployeesDefault;
