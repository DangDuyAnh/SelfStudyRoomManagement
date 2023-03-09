import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TextField, InputAdornment } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { axiosGet } from '../utils/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';

const DateToString = (date) => {
  let time = new Date(date)
  let showTime = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()}`
  return showTime
}

const TimeToString = (date) => {
  let time = new Date(date);
  let singleMinutes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let minute = time.getMinutes().toString();
  if (singleMinutes.includes(minute)) minute = '0' + minute;
  let showTime = `${time.getHours()}:${minute}`;
  return showTime
}

const renderCode = (code) => {
  return code.toString().substring(code.length - 5)
}

const theme = createTheme({
    palette: {
      secondary: {
        main: '#0088FF'
      }
    }
  })
  
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [rows, setRows] = React.useState([]);
    const [rows2, setRows2] = React.useState([]);
    const [originRow, setOriginRow] = React.useState([]);
    const [originRow2, setOriginRow2] = React.useState([]);

    const getData = async () => {
      let res = await axiosGet("/registerForm/list");
      let notProcess = res.data.filter(item => !item.status);
      let alreadyProcess = res.data.filter(item => item.status);
      setRows(notProcess);
      setOriginRow(notProcess);
      setRows2(alreadyProcess);
      setOriginRow2(alreadyProcess);
    }

    useEffect(() => {
      getData()
    }, []);

    const filter1 = (e) => {
      let s = e.target.value.toString();
      console.log(s)
      setRows(originRow.filter(el =>
        el._id.includes(s) || el.idStudent.name.includes(s) || el.idStudent.studentCode.toString().includes(s) 
      ))
    }

    const filter2 = (e) => {
      let s = e.target.value.toString();
      console.log(s)
      setRows2(originRow2.filter(el =>
        el._id.includes(s) || el.idStudent.name.includes(s) || el.idStudent.studentCode.toString().includes(s) 
      ))
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function Table1() {
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    
      return (
        <Paper variant="outlined">
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Mã đơn
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Tên sinh viên
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      MSSV
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Ngày gửi đơn
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Ngày sử dụng phòng
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Giờ bắt đầu
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Giờ kết thúc
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Loại phòng
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Số chỗ ngồi
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Trạng thái
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell>
                          <a href={"/register-form/" + row._id} style={{color: "#0088FF", textDecoration: "underline", cursor: "pointer"}}>
                          #{renderCode(row._id)}
                          </a>
                        </TableCell>
                        <TableCell>
                          {row.idStudent.name}
                        </TableCell>
                        <TableCell>
                          {row.idStudent.studentCode}
                        </TableCell>
                        <TableCell>
                          {DateToString(row.createdAt)}
                        </TableCell>
                        <TableCell>
                          {DateToString(row.dateRegister)}
                        </TableCell>
                        <TableCell>
                          {TimeToString(row.startTime)}
                        </TableCell>
                        <TableCell>
                          {TimeToString(row.endTime)}
                        </TableCell>
                        <TableCell>
                          {row.typeRoom}
                        </TableCell>
                        <TableCell>
                          {row.numberSeats}
                        </TableCell>
                        <TableCell>
                          <Chip label="Chờ xử lý" color="warning" variant="outlined" />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className='yah'
          />
        </Paper>
      );
    }

    function Table2() {
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    
      return (
        <Paper variant="outlined">
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Mã đơn
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Tên sinh viên
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      MSSV
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Ngày gửi đơn
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Ngày sử dụng phòng
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Giờ bắt đầu
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Giờ kết thúc
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Loại phòng
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Số chỗ ngồi
                    </TableCell>
                    <TableCell
                      sx={{fontWeight: "bold", whiteSpace: "nowrap"}}
                    >
                      Phòng chỉ định
                    </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        <TableCell>
                        #{renderCode(row._id)}
                        </TableCell>
                        <TableCell>
                          {row.idStudent.name}
                        </TableCell>
                        <TableCell>
                          {row.idStudent.studentCode}
                        </TableCell>
                        <TableCell>
                          {DateToString(row.createdAt)}
                        </TableCell>
                        <TableCell>
                          {DateToString(row.dateRegister)}
                        </TableCell>
                        <TableCell>
                          {TimeToString(row.startTime)}
                        </TableCell>
                        <TableCell>
                          {TimeToString(row.endTime)}
                        </TableCell>
                        <TableCell>
                          {row.typeRoom}
                        </TableCell>
                        <TableCell>
                          {row.numberSeats}
                        </TableCell>
                        <TableCell>
                          {row.assignedRoom.idBuilding.name} {row.assignedRoom.name}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className='yah'
          />
        </Paper>
      );
    }

    return (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', color: 'blue' }}>
            <ThemeProvider theme={theme}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='secondary'
                TabIndicatorProps={{
                    style: {
                    backgroundColor: '#0088FF'
                    }
                }}
                >
                    <Tab label={<span style={{fontSize: '14px', textTransform: 'none'}}>Đang chờ duyệt</span>} {...a11yProps(0)}/>
                    <Tab label={<span style={{fontSize: '14px', textTransform: 'none'}}>Đã duyệt</span>} {...a11yProps(1)}/>
                </Tabs>
            </ThemeProvider>
          </Box>
            <TabPanel value={value} index={0}>
            <Box sx={{padding: '15px'}}>
                <TextField
                    fullWidth
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    style: {
                        fontSize: '14px',
                    }
                    }}
                    inputProps = {{
                        style: {
                            padding: '10px 2px'
                        } 
                    }}
                    variant="outlined"
                    placeholder='Tìm kiếm'
                    sx={{mb: 2}}
                    onChange={filter1}
                />
                <Table1 />
            </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Box sx={{padding: '15px'}}>
                <TextField
                    fullWidth
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    style: {
                        fontSize: '14px',
                    }
                    }}
                    inputProps = {{
                        style: {
                            padding: '10px 2px'
                        } 
                    }}
                    variant="outlined"
                    placeholder='Tìm kiếm'
                    sx={{mb: 2}}
                    onChange={filter2}
                />
                  <Table2 />
            </Box>
            </TabPanel>
        </Box>
      );
}

export default function WaitingRegister(props) {
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">

                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Đơn đăng ký của sinh viên</h1>
                            </div>
                        </div>

                        <Paper sx={{mt: 3}}>
                            <Box>
                                <BasicTabs />
                            </Box>
                        </Paper>
                    </div>       
                </div>
            </div>     
        </div>
    )
}