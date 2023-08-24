// material-ui
import {
  Typography
} from '@mui/material';

// project import
// import EmployeesTable from './EmployeesTable';
import MainCard from 'components/MainCard';



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const SettingsDefault = () => {

  return (
    // <Grid  >
    //  {/* <Grid container alignItems="center" justifyContent="space-between">
    //     <Typography variant="h4" color="#632b8f"> Botanical Garden</Typography>
    //     </Grid> */}

    //   {/* row 3 */}
    //   <Grid item xs={12} md={7} lg={8}>
        
    //     <MainCard sx={{ mt: 3 }} content={false}>
    //       <EmployeesTable />
    //     </MainCard>
    //   </Grid>

    <MainCard title="Sample Card">
    <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography>
  </MainCard>
      

    // </Grid>
  );
};

export default SettingsDefault;
