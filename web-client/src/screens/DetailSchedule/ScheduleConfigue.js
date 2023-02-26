import * as React from 'react';
import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import {Paper, Button, IconButton} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#00a8e1",
        contrastText: 'white'
      },
    },
  });

export default function ScheduleConfigue(){
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Thiết lập lịch</h1>
                            </div>

                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Lịch phục vụ</li>
                                <li className="breadcrumb-item"><a href='#'>Chung</a></li>
                                <li className="breadcrumb-item active"><a href="#">D3</a></li>
                                </ol>
                            </div>
                        </div>

                        <Paper sx={{mt: 3, p: 3}}>
                            <div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Phòng học: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>D3</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Địa chỉ: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>D3</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Loại phòng: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>D3</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Hình thức đăng ký: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>D3</p>
                                </div>

                                <div>
                                    <h1 style={{padding: 0, marginTop: '50px', fontSize: '18px', fontWeight: '600'}}
                                        >LỊCH PHỤC VỤ</h1>
                                    <div style={{width: '90px', height: '2px', backgroundColor: '#00a8e1', marginTop: '17px', marginBottom: '40px'}}/>

                                    <div style={{marginBottom: '40px'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div style={{width: '5px', height: '38px', backgroundColor: '#616161'}}/>
                                            <div style={{width: '250px', height: '38px', backgroundColor: '#00a8e1', alignItems: 'center',
                                                display: 'flex'}}>
                                                <p style={{color: 'white', padding: 0, margin: 0, marginLeft: '15px', fontSize: '16px'
                                                    , fontWeight: '500'}}>01/01/2023 - 10/09/2023</p>
                                            </div>
                                            <IconButton aria-label="delete" color="success" sx={{ml: 1}}>
                                                <AddCircleOutlineIcon fontSize='small'/>
                                            </IconButton>

                                            <IconButton aria-label="delete" color="error">
                                                <DeleteOutlineIcon fontSize='small'/>
                                            </IconButton>
                                        </div>
                                        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', border: '1px solid black', padding: '15px'}}>
                                            <div className="box-small-time">
                                                <p className="small-time">8:00 - 23:00</p>
                                            </div>

                                            <div className="box-small-time">
                                                <p className="small-time">8:00 - 23:00</p>
                                            </div>
                                        </div>  
                                    </div>

                                    <div style={{marginBottom: '40px'}}>
                                        <div style={{display: 'flex'}}>
                                            <div style={{width: '5px', height: '35px', backgroundColor: '#616161'}}/>
                                            <div style={{width: '250px', height: '35px', backgroundColor: '#00a8e1', alignItems: 'center',
                                                display: 'flex'}}>
                                                <p style={{color: 'white', padding: 0, margin: 0, marginLeft: '15px', fontSize: '16px'
                                                    , fontWeight: '500'}}>01/01/2023 - 10/09/2023</p>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', border: '1px solid black', padding: '15px'}}>
                                            <div className="box-small-time">
                                                <p className="small-time">8:00 - 23:00</p>
                                            </div>

                                            <div className="box-small-time">
                                                <p className="small-time">8:00 - 23:00</p>
                                            </div>
                                        </div>  
                                    </div>

                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained">
                                            Thêm
                                        </Button>
                                    </ThemeProvider>
                                </div>


                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    )
}