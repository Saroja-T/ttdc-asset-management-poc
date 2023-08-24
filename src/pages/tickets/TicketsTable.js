import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';


// material-ui

import {
  Modal,
  IconButton,
  Box,
  Stack,
  InputLabel,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
 
} from '@mui/material';
import { } from '@mui/material';

// third-party
// import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

function createData(trackingNo, name,oraganisation, status,assignedto) {
  return { trackingNo, name,oraganisation, status, assignedto };
}

const rows = [
  createData(98652366, 'Keyboard not working','Hotel', 0,"Sanith"),
  createData(98756325, 'Printer paper gets teared when printing','Beach House', 2,"Not Assigned"),
  createData(98756378, 'Mobile phones battery issues','Rest House' ,2,"Not Assigned"),
  createData(98652248, 'Water heater coil issues', 'Hotel',1,"Raju"),
  createData(98652366, 'Monitor not working','Hotel', 0,"Sanith"),
  createData(98756325, 'Printer paper gets teared when printing','Beach House', 2,"Not Assigned"),
  createData(98756378, 'SMPS Failure for Billing System','Rest House' ,2,"Not Assigned"),
  createData(98756378, 'Mobile phones battery issues','Rest House' ,2,"Not Assigned"),
  createData(98652248, 'Wifi Modem range issues', 'Hotel',1,"Raju"),
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}



function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Issue Description'
  },
  {
    id: 'organisation',
    align: 'left',
    disablePadding: true,
    label: 'Organisation'
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: true,
    label: 'Status'
  },
  {
    id: 'assignedto',
    align: 'left',
    disablePadding: true,
    label: 'Assigned To'
  },
 
];
// ==============================|| -------------------- ||============================== //
// ==============================|| ORDER TABLE - HEADER ||============================== //

function TicketTableHead({ order, orderBy }) 
{
  
  return (
    <TableHead sx={{ backgroundColor: "#15779e"}}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{color:"#ffffff"}}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TicketTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Assigned';
      break;
    case 1:
      color = 'success';
      title = 'Fixed';
      break;
    case 2:
      color = 'error';
      title = 'Pending';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function TicketTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);
  const [openDetailsModal, setOpenDetailsModal] = React.useState(false);
  const handleDetailsModalClose = () => {
    setOpenDetailsModal(false);
  };
  const handleDetailsModalOpen = () => {
  setOpenDetailsModal(true);
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

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-of-type': {
              pl: 2
            },
            '& .MuiTableCell-root:last-of-type': {
              pr: 3
            }
          }}
        >
          <TicketTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
              const isItemSelected = isSelected(row.trackingNo);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.trackingNo}
                  selected={isItemSelected}
                  onClick={handleDetailsModalOpen}
                >
                  <TableCell component="th" id={labelId} scope="row" align="left">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.trackingNo}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.oraganisation}</TableCell>

                  <TableCell align="left">
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell align="left">{row.assignedto}</TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openDetailsModal} onClose={handleDetailsModalClose}>
            <Box sx={style}>
              <IconButton onClick={() => handleDetailsModalClose()} edge="end" style={{ float: 'right', marginTop: '-30px' }}>
                {/* <Iconify icon={'ant-design:close-outlined'} /> */}
              </IconButton>
              <Typography variant="h4" color="inherit" textAlign="center" fontWeight="bold">Ticket Details</Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={10}>
                <Stack spacing={1} sx={{ width: '100%' }}>
                  <InputLabel sx={{color:"black", fontWeight:"bold"}}>Issue</InputLabel>
                  <Stack>
                  <Typography variant="h6" color="textSecondary">Ac not working</Typography>

                  </Stack>
                </Stack>
              </Stack>
              <Stack>
              <InputLabel style={{marginTop:'20px',color:"black", fontWeight:"bold"}}>Discription</InputLabel>
              <Typography variant="h6" color="textSecondary">Ac is not capable to cool the entire room. The cooling gas needs to be changed</Typography>

              </Stack>
              <Stack>
              <InputLabel style={{marginTop:'20px',color:"black", fontWeight:"bold"}}>Oraganisation</InputLabel>
              <Typography variant="h6" color="textSecondary">Tamilnadu Hotel</Typography>

              </Stack>
              <Stack>
              <InputLabel style={{marginTop:'20px',color:"black", fontWeight:"bold"}}>Address</InputLabel>
              <Typography variant="h6" color="textSecondary">Thrichy main road, Oppo. Hatsun Appartments Peelamaedu Coimbatore</Typography>

              </Stack>
              <Stack>
              <InputLabel style={{marginTop:'20px',color:"black", fontWeight:"bold"}}>Assigned to</InputLabel>
              <Typography variant="h6" color="textSecondary">Thrichy main road, Oppo. Hatsun Appartments Peelamaedu Coimbatore</Typography>

              </Stack>
              <Stack>
              <InputLabel style={{marginTop:'20px',color:"black", fontWeight:"bold"}}>Status</InputLabel>
              <OrderStatus status={1} />

              </Stack>
            </Box>
          </Modal>
    </Box>
  );
}
