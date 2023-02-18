import * as React from 'react';
import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import {Paper, Button, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DetailSchedule(){
    const [value, setValue] = React.useState(new Date());
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Lịch phục vụ</h1>
                            </div>

                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Thiết lập lịch</li>
                                <li className="breadcrumb-item"><a href='#'>Chung</a></li>
                                <li className="breadcrumb-item active"><a href="#">D3</a></li>
                                </ol>
                            </div>
                        </div>

                        <Paper sx={{mt: 3, p: 3}}>
                            <div style={{margin: '0px 170px'}}>
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

                                <div style={{display: 'flex', marginTop: '50px'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Ngày áp dụng: </p>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            value={value}
                                            inputFormat="DD.MM.YYYY"
                                            onChange={(newValue) => {
                                            setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                                        sx={{
                                                                            input: {
                                                                                padding : "8px 12px", 
                                                                                backgroundColor: 'white'
                                                                            }, 
                                                                            svg: {
                                                                                backgroundColor: 'white'
                                                                            }}} />}
                                        />
                                    </LocalizationProvider>
                                </div>

                                <ol class="gradient-list" style={{marginTop: '30px'}}> 
                                    <li>
                                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <p style={{margin: 0, padding: 0}}>8:00 - 9:00</p>
                                            <IconButton aria-label="delete" color="error" size="small">
                                                <DeleteIcon sx={{m: 0, p: 0, fontSize: '20px'}}/>
                                            </IconButton>
                                        </div>
                                    </li>
                                    <li>
                                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <p style={{margin: 0, padding: 0}}>8:00 - 9:00</p>
                                            <IconButton aria-label="delete" color="error" size="small">
                                                <DeleteIcon sx={{m: 0, p: 0, fontSize: '20px'}}/>
                                            </IconButton>
                                        </div>
                                    </li>

                                </ol>

                                <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                                    <Button variant="contained" color="success">
                                        Thêm mới
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    )
}