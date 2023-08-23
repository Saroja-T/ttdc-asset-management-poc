import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar,Stack} from '@mui/material';



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
                  alt="Ajith"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 20 - 14, 3rd Floor,Xavier north street, Kottar, Nagercoil, Tamil Nadu 629002p</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Seating and Shelters</Typography>
          </Stack>            
        </CardContent>
      </Card>

<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="John Cena"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 15 - 20, ground Floor, West cross street, Near SRS Mall, Coimbatore, Tamil Nadu 641018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Kitchen Facilities,Break Rooms</Typography>
          </Stack>            
        </CardContent>
      </Card>

<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Virat Kohli"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 20, ground Floor, North street, Near ABT parcel service,Chennai, Tamil Nadu 6000028</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Office Supplies,Communication Tools</Typography>
          </Stack>            
        </CardContent>
      </Card>

<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Rohit Sharma"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 109/67, 1st Floor, service road street, madurai, Tamil Nadu 641019</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Art and Decor</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Jasprit Bumrah"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 965,Race course street, Coimbatore, Tamil Nadu 641018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Gyms, pools, spas</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="ABD Viliers"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 788, ground Floor, Rojar Feder street, highways, Nagapattanam, Tamil Nadu 645018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Network Infrastructure,Storage</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Roman Reigns"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 123, ground Floor, main corner street, Near main road, Ariyalur, Tamil Nadu 612018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Information centers, ticket booths</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Seth Rollings"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 895, 1st Floor, Newton street, Near Apple Shop,chennai, Tamil Nadu 6001018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Handrails, barriers, and warning signs</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Dean Ambros"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 5689, 3rd  Floor, West Florida street, Near cross cut road, Coimbatore, Tamil Nadu 641018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Reception desk, seating areas,</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="KL Rahul"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 155, ground Floor, short cross street, Near abs shoes, Chennai, Tamil Nadu 610018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Assistance with bookings, recommendations</Typography>
          </Stack>            
        </CardContent>
      </Card>
<Card style ={{boxShadow: "5px 10px #e7d8f3"}}>
        <CardContent>
        <Stack direction = "column">
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  alt="Riyaz Ahamad"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                  style={{
                    backgroundColor: randomColor()
                  }}/>
                  <Typography level="title-md" align="center">Ramesh  Babu</Typography>
                </Stack>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Address :</strong> 56,4th Floor, East cross street, Near kvp textiles, Coimbatore, Tamil Nadu 641018</Typography>
                <Typography level="title-md" style={{marginTop:"10px", marginLeft:"10px"}}><strong>Assets :</strong>Lounge areas, sofas, recreational items,</Typography>
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
