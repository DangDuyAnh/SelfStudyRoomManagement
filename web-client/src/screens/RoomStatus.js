import * as React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Typography } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PlaceIcon from '@mui/icons-material/Place';
import EventSeatIcon from '@mui/icons-material/EventSeat';

export default function RoomStatus() {
    const [value, setValue] = React.useState(new Date());
    const [status, setStatus] = React.useState('Tất cả');

    const handleChange = (event) => {
        setStatus(event.target.value);
      };

    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Xem tình trạng phòng</h1>
                            </div>
                        </div>

                        <Paper sx={{mt: 3}} elevation={3}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Box sx={{p: 2}}>

                                        <Typography sx={{fontSize: '12px', color: '#787878'
                                    , fontWeight: '700', mb: 1}}>THỜI GIAN</Typography>                                        
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            ampm={false}
                                            inputFormat="DD.MM.YYYY HH:MM"
                                            value={value}
                                            onChange={(newValue) => {
                                            setValue(newValue);
                                            }}
                                            sx={{width: '4000px'}}
                                            renderInput={(params) => <TextField {...params} style={{width: '100%'}} 
                                                                        sx={{
                                                                            width: '100%'
                                                                        }} />}
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                </Grid>

                                <Grid item xs={2.25}>
                                <Box sx={{p: 2}}>
                                    <Typography sx={{fontSize: '12px', color: '#787878'
                                    , fontWeight: '700', mb: 1}}>PHÒNG HỌC</Typography> 
                                    <TextField></TextField>                                       
                                </Box>
                                </Grid>

                                <Grid item xs={2.25}>
                                <Box sx={{p: 2}}>
                                    <Typography sx={{fontSize: '12px', color: '#787878'
                                    , fontWeight: '700', mb: 1}}>TÒA NHÀ</Typography> 
                                    <TextField></TextField>                                       
                                </Box>
                                </Grid>

                                <Grid item xs={2.25}>
                                <Box sx={{p: 2}}>
                                    <Typography sx={{fontSize: '12px', color: '#787878'
                                    , fontWeight: '700', mb: 1}}>TRẠNG THÁI</Typography> 
                                    <Select
                                        value={status}
                                        onChange={handleChange}
                                        sx={{width: '100%'}}
                                        >
                                        <MenuItem value={"Tất cả"}>Tất cả</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>                                    
                                </Box>
                                </Grid>

                                <Grid item xs={2.25}>
                                    <Box sx={{p: 2 }}>
                                    <Button sx = {{width: '100%', mt: 3, height: '56px'}} variant="contained">Tìm kiếm</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Grid container spacing={2} sx={{mt : 2}}>
                            <Grid item xs={3}>
                                <Paper sx={{padding: '8px'}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>201</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='row-icon'>
                                                <div>
                                                    <PlaceIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Tòa D3 tầng 1</p>
                                            </div>  

                                            <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '18px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                            </div>

                                            <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                <div class="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px', color: '#28A745'}}/>
                                                </div>
                                                <p style={{fontWeight: '600', color: '#28A745'}}>5/30</p>
                                            </div>                                          
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid item xs={3}>
                                <Paper sx={{padding: '8px'}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>201</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='row-icon'>
                                                <div>
                                                    <PlaceIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Tòa D3 tầng 1</p>
                                            </div>  

                                            <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '18px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                            </div>

                                            <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                <div class="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px', color: '#FFC107'}}/>
                                                </div>
                                                <p style={{fontWeight: '600', color: '#FFC107'}}>5/30</p>
                                            </div>                                          
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            
                            <Grid item xs={3}>
                                <Paper sx={{padding: '8px'}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>201</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='row-icon'>
                                                <div>
                                                    <PlaceIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Tòa D3 tầng 1</p>
                                            </div>  

                                            <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '18px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                            </div>

                                            <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                <div class="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                </div>
                                                <p style={{fontWeight: '600', color: '#DC3545'}}>5/30</p>
                                            </div>                                          
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid item xs={3}>
                                <Paper sx={{padding: '8px'}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>201</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='row-icon'>
                                                <div>
                                                    <PlaceIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Tòa D3 tầng 1</p>
                                            </div>  

                                            <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '18px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                            </div>

                                            <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                <div class="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                </div>
                                                <p style={{fontWeight: '600', color: '#DC3545'}}>5/30</p>
                                            </div>                                          
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid item xs={3}>
                                <Paper sx={{padding: '8px'}}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                            <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>201</Typography>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='row-icon'>
                                                <div>
                                                    <PlaceIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Tòa D3 tầng 1</p>
                                            </div>  

                                            <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '18px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '18px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                            </div>

                                            <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                <div class="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>

                                            <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                </div>
                                                <p style={{fontWeight: '600', color: '#DC3545'}}>5/30</p>
                                            </div>                                          
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}