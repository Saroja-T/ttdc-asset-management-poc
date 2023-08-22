import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar,Stack} from '@mui/material';



// const useStyles = makeStyles(() =>
//   createStyles({
//     large: {
//       fontSize: "2.5rem",
//       width: 100,
//       height: 100
//     }
//   })
// );

function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);
  return color;
}
export default function VendorsDefault() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 3,
      }}
    >
      <Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Ramesh"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 14 - 15, 2nd Floor, V.J. Business Centre G.R.G. Layout, Trichy Rd, Coimbatore, Tamil Nadu 641018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Laptop, Mobile</Typography>
          </Stack>            
        </CardContent>
      </Card>






      {/* <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Outlined card</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
      </Card>

      <Card variant="soft">
        <CardContent>
          <Typography level="title-md">Soft card</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
      </Card>

      <Card variant="solid">
        <CardContent>
          <Typography level="title-md" textColor="inherit">
            Solid card
          </Typography>
          <Typography textColor="inherit">Description of the card.</Typography>
        </CardContent>
      </Card> */}
    </Box>
  );
}
