import * as React from 'react';
import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import './ServiceSchedule.css';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PlaceIcon from '@mui/icons-material/Place';

export default function ServiceSchedule() {
    const [value, setValue] = React.useState(null);
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
                        </div>
                        
                        <div style={{marginTop: '30px'}}>
                            <div className="form-row">
                                <div className="form-group col-md-5" style={{marginRight: '20px'}}>
                                    <label>Tòa nhà</label>
                                    <select className="form-control">
                                            <option>D3</option>
                                            <option>D5</option>
                                        </select>
                                </div>
                                <div className="form-group col-md-5">
                                    <label>Ngày</label>
                                    <div>
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
                                </div>
                            </div>

                            <div className="form-row" style={{display: 'flex', alignItems: 'flex-end'}}>
                                <div className="form-group col-md-7" style={{marginRight: '15px'}}>
                                    <label>Phòng học</label>
                                    <input type="text" className="form-control" placeholder="Phòng học" required />
                                </div>

                                <div className="form-group col-md-2">
                                    <Button variant="contained" style={{marginBottom: '2px', padding: '6px 5px'}}>
                                        <SearchIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                            <div style={{display: 'inline-flex', flexWrap: 'wrap', width: '1140px'}}>
                                <div className='card' style={{margin: '15px'}}>
                                    <div className='card-body' style={{position: 'relative'}}>
                                        <div>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <h3 style={{fontSize: '32px', margin: '25px 55px 45px 35px'}}>201</h3>
                                                <div style={{width: '170px'}}>
                                                    <div className='row-icon'>
                                                        <div>
                                                            <PlaceIcon style={{fontSize: '20px'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Tòa D3 tầng 1</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Phòng cá nhân</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <QrCodeIcon style={{fontSize: '20px', color: '#1976d2'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#1976d2'}}>Phòng tự do</p>
                                                    </div>

                                                    <div style={{height: '1px', width: '100%', backgroundColor: '#bdbdbd', margin: '15px 0px 0px 0px'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{marginTop: '10px'}}>
                                            <ul style={{padding: '0px 0px 0px 35px', color: 'green', fontWeight: '600'}}>
                                                <li style={{margin: 0, padding: 0}}>8:00 - 12:00</li>
                                                <li style={{margin: 0, padding: 0}}>13:00 - 18:00</li>
                                                <li style={{margin: 0, padding: 0}}>13:00 - 18:00</li>
                                            </ul>
                                        </div>

                                        <div className='more-info'>
                                            <a href="#" class="small-box-footer" style={{color: 'black'}}>More info <i class="fas fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className='card' style={{margin: '15px'}}>
                                    <div className='card-body' style={{position: 'relative'}}>
                                        <div>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <h3 style={{fontSize: '32px', margin: '25px 55px 45px 35px'}}>201</h3>
                                                <div style={{width: '170px'}}>
                                                    <div className='row-icon'>
                                                        <div>
                                                            <PlaceIcon style={{fontSize: '20px'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Tòa D3 tầng 1</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Phòng cá nhân</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <QrCodeIcon style={{fontSize: '20px', color: '#1976d2'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#1976d2'}}>Phòng tự do</p>
                                                    </div>

                                                    <div style={{height: '1px', width: '100%', backgroundColor: '#bdbdbd', margin: '15px 0px 0px 0px'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{marginTop: '10px'}}>
                                            <ul style={{padding: '0px 0px 0px 35px', color: 'green', fontWeight: '600'}}>
                                                <li style={{margin: 0, padding: 0, color: 'red'}}>Không phục vụ</li>
                                            </ul>
                                        </div>

                                        
                                        <div className='more-info'>
                                            <a href="#" class="small-box-footer" style={{color: 'black'}}>More info <i class="fas fa-arrow-circle-right"></i></a>
                                        </div>

                                    </div>
                                </div>

                                <div className='card' style={{margin: '15px'}}>
                                    <div className='card-body' style={{position: 'relative'}}>
                                        <div>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <h3 style={{fontSize: '32px', margin: '25px 55px 45px 35px'}}>201</h3>
                                                <div style={{width: '170px'}}>
                                                    <div className='row-icon'>
                                                        <div>
                                                            <PlaceIcon style={{fontSize: '20px'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Tòa D3 tầng 1</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Phòng cá nhân</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <QrCodeIcon style={{fontSize: '20px', color: '#1976d2'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#1976d2'}}>Phòng tự do</p>
                                                    </div>

                                                    <div style={{height: '1px', width: '100%', backgroundColor: '#bdbdbd', margin: '15px 0px 0px 0px'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{marginTop: '10px'}}>
                                            <ul style={{padding: '0px 0px 0px 35px', color: 'green', fontWeight: '600'}}>
                                                <li style={{margin: 0, padding: 0}}>8:00 - 12:00</li>
                                                <li style={{margin: 0, padding: 0}}>13:00 - 18:00</li>
                                                <li style={{margin: 0, padding: 0}}>13:00 - 18:00</li>
                                            </ul>
                                        </div>

                                        <div className='more-info'>
                                            <a href="#" class="small-box-footer" style={{color: 'black'}}>More info <i class="fas fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className='card' style={{margin: '15px'}}>
                                    <div className='card-body' style={{position: 'relative'}}>
                                        <div>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <h3 style={{fontSize: '32px', margin: '25px 55px 45px 35px'}}>201</h3>
                                                <div style={{width: '170px'}}>
                                                    <div className='row-icon'>
                                                        <div>
                                                            <PlaceIcon style={{fontSize: '20px'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Tòa D3 tầng 1</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                        </div>
                                                        <p style={{fontWeight: '600'}}>Phòng cá nhân</p>
                                                    </div>

                                                    <div className='row-icon'>
                                                        <div>
                                                            <QrCodeIcon style={{fontSize: '20px', color: '#1976d2'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#1976d2'}}>Phòng tự do</p>
                                                    </div>

                                                    <div style={{height: '1px', width: '100%', backgroundColor: '#bdbdbd', margin: '15px 0px 0px 0px'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{marginTop: '10px'}}>
                                            <ul style={{padding: '0px 0px 0px 35px', color: 'green', fontWeight: '600'}}>
                                                <li style={{margin: 0, padding: 0, color: 'red'}}>Không phục vụ</li>
                                            </ul>
                                        </div>

                                        
                                        <div className='more-info'>
                                            <a href="#" class="small-box-footer" style={{color: 'black'}}>More info <i class="fas fa-arrow-circle-right"></i></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>   

                        <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '40px'}}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}