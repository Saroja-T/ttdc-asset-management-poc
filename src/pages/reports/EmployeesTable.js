import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// third-party
// import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

function createData(trackingNo, name, fat, carbs, protein,isActive) {
  return { trackingNo, name, fat, carbs, protein,isActive };
}

// const rows = [
//   createData(1, 'Camera Lens', 40, 2, 40570),
//   createData(2, 'Laptop', 300, 0, 180139),
//   createData(3, 'Mobile', 355, 1, 90989),
//   createData(4, 'Handset', 50, 1, 10239),
//   createData(5, 'Computer Accessories', 100, 1, 83348),
//   createData(6, 'TV', 99, 0, 410780),
//   createData(7, 'Keyboard', 125, 2, 70999),
//   createData(8, 'Mouse', 89, 2, 10570),
//   createData(9, 'Desktop', 185, 1, 98063),
//   createData(10, 'Chair', 100, 0, 14001)
// ];

const rows = [
   createData("E001", 'Vaiko','Accounting','Attractions','Ooty'),
   createData("E002", 'Thol Thirumaavalavan','Product Manager','Hotels','Tirunelveli'),
   createData("E003", 'Thirunavukkarasar','Marketing management','Tour&Packages','Kodaikanal' ),
   createData("E004", 'Thangam Thennarasu','Chief Executive Officer','Beach','Covelong'),
   createData("E005", 'Tamilaruvi Manian','Chief Operating Officer','Tour&Packages','Thiruvannamalai'),
   createData("E006", 'Paarivendhar','Administrative assistant','Hotels','Kancheepuram'),
   createData("E007", 'Thalikottai Raju Baalu','Customer service representative','Backwaters','Pichavaram' ),
   createData("E008", 'Elumalai','Marketing Specialist','Tourism booking service','Tamilnadu Tourism Complex,Varaja Road'),
   createData("E009", 'Nitish Kumar','Business Analyst','Tourism booking service','Wallajah Road, 2,Wallahjah'),
   createData("E0011",'P Chidambaram','Senior management','Museums','Chennai')
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
    label: 'Employee ID'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label:'Name'
  },
  {
    id: 'fat',
    align: 'left',
    disablePadding: false,
    label: 'Role'
  },
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,
    label: 'Department'
  },
  {
    id: 'protein',
    align: 'center',
    disablePadding: false,
    label: 'Location'
  },
  {
    id: 'action',
    align: 'center',
    disablePadding: false,
    label: 'Action'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead sx={{ backgroundColor: "#15779e"}} >
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

OrderTableHead.propTypes = {
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
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Approved';
      break;
    case 2:
      color = 'error';
      title = 'Rejected';
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

export default function EmployeesTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('trackingNo');
  const [selected] = useState([]);

  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

  const formatData = (items) => {
    return items.map((item) => ({...item, isActive: false}))
  }

  const [myRecords, setMyRecords] = useState(formatData(rows))
  
    
    const handleColorChange = (id) => {
      setMyRecords((prevState) => {
        return prevState.map((item) => {
          if(item.trackingNo === id) {
            return {...item, isActive: true}
          }else {
            return {...item, isActive: false}
          }
        })
      })
    }
    useEffect(()=>{
    },[myRecords])

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
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(myRecords, getComparator(order, orderBy)).map((row, index) => {
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
                  style={{
                    backgroundColor: row.isActive ? '#d2eef9' : '',
                    }}
                    onClick = {() => handleColorChange(row.trackingNo)} 
                >
                  <TableCell component="th" id={labelId} scope="row" align="center ">
                    <Link color="secondary" component={RouterLink} to="">
                      {row.trackingNo}
                    </Link>
                  </TableCell>
                  <TableCell align="left"  style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        width: "300px",
                        display: "block",
                        overflow: "hidden"
                      }}>{row.name}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                  <TableCell align="center">
                    <EditIcon fontSize="small" sx={{ color: "#23ace2" }}/>
                  </TableCell>

                  {/* <TableCell align="left">
                    <OrderStatus status={row.carbs} />
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat value={row.protein} displayType="text" thousandSeparator prefix="$" />
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
