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
import { Typography, Autocomplete } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PlaceIcon from '@mui/icons-material/Place';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import {axiosGet, axiosPost} from "../utils/api" ;
import PersonIcon from '@mui/icons-material/Person';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function RoomStatus() {
    const [value, setValue] = React.useState(new Date());
    const [status, setStatus] = React.useState("Tất cả");
    const [buildings, setBuildings] = React.useState([{_id: "", name: "Tất cả"}]);
    const [rooms, setRooms] = React.useState([{_id: "", name: "Tất cả"}]);
    const [choosedIdBuilding, setChoosedIdBuilding] = React.useState();
    const [choosedIdRoom, setChoosedIdRoom] = React.useState();
    const [roomCard, setRoomCard] = React.useState([])

    React.useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const res = await axiosGet("/building/list");
        setBuildings([{_id: "", name: "Tất cả"}, ...res.data]);
        handleSearch()
    }

    const handleChange = (event) => {
        setStatus(event.target.value);
      };

    const chosingBuilding = async (event, value) => {
    setChoosedIdBuilding(value._id)
    const res = await axiosPost("/room/list-by-building-name", {
        buildingId: value._id
    });
    setRooms([{_id: "", name: "Tất cả"}, ...res.data.rooms]);
    }   

    const choosingRoom = (event, value) => {
        setChoosedIdRoom(value._id)
    }

    const handleSearch = async () => {
        const res = await axiosPost("/room/status", {
            date: value,
            idRoom: choosedIdRoom,
            idBuilding: choosedIdBuilding,
            status: status
        })
        setRoomCard(res.data);
        console.log(res.data);
    }

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
                                    , fontWeight: '700', mb: 1}}>TÒA NHÀ</Typography> 
                                            <Autocomplete
                                                options={buildings}
                                                autoHighlight
                                                defaultValue={buildings[0]}
                                                getOptionLabel={(option) => option.name}
                                                onChange={chosingBuilding}
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                    />
                                                )}
                                            />                                    
                                </Box>
                                </Grid>

                                <Grid item xs={2.25}>
                                <Box sx={{p: 2}}>
                                    <Typography sx={{fontSize: '12px', color: '#787878'
                                    , fontWeight: '700', mb: 1}}>PHÒNG HỌC</Typography> 
                                            <Autocomplete
                                                options={rooms}
                                                autoHighlight
                                                onChange={choosingRoom}
                                                getOptionLabel={(option) => option.name}
                                                defaultValue={rooms[0]}
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    inputProps={{
                                                        ...params.inputProps,
                                                    }}
                                                    />
                                                )}
                                            />                                      
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
                                        <MenuItem value="Tất cả">Tất cả</MenuItem>
                                        <MenuItem value="Phòng vắng">Phòng vắng</MenuItem>
                                        <MenuItem value="Trung bình">Trung bình</MenuItem>
                                        <MenuItem value="Phòng đầy">Phòng đầy</MenuItem>
                                    </Select>                                    
                                </Box>
                                </Grid>

                                <Grid item xs={2.25}>
                                    <Box sx={{p: 2 }}>
                                    <Button sx = {{width: '100%', mt: 3, height: '56px'}} variant="contained" onClick={handleSearch}>Tìm kiếm</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Grid container spacing={2} sx={{mt : 2}}>
                            {roomCard.map((item) => {
                                return(
                                    <Grid item xs={3}>
                                    <Paper sx={{padding: '8px'}}>
                                        <Grid container>
                                            <Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                <Typography sx={{fontWeight: 'bold', fontSize: '18px'}}>{item.room.name}</Typography>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <div className='row-icon'>
                                                    <div>
                                                        <PlaceIcon style={{fontSize: '18px'}}/>
                                                    </div>
                                                    <p>Tòa {item.room.idBuilding.name} tầng {item.room.name}</p>
                                                </div>  
    
                                                {item.room.typeRoom == "Phòng học nhóm"?
                                                            <div className='row-icon'>
                                                            <div>
                                                                <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                            </div>
                                                            <p>Phòng học nhóm</p>
                                                            </div>
                                                            :
                                                            <div className='row-icon'>
                                                            <div>
                                                                <PersonIcon style={{fontSize: '20px'}}/>                                               
                                                            </div>
                                                            <p>Phòng cá nhân</p>
                                                            </div>
                                                            }
    
                                                            {item.room.accessType == "Phòng tự do"?
                                                            <div className='row-icon'>
                                                            <div>
                                                                <QrCodeIcon style={{fontSize: '20px'}}/>
                                                            </div>
                                                            <p>Phòng tự do</p>
                                                            </div>
                                                            :
                                                            <div className='row-icon'>
                                                            <div>
                                                                <DraftsIcon style={{fontSize: '20px'}}/>
                                                            </div>
                                                            <p>Phòng cần đăng ký</p>
                                                            </div>
                                                            }
    
                                                {(item.status == "Phòng vắng")&&<div>
                                                    <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                        <div class="progress-bar bg-success" role="progressbar" style={{width: `${item.sitting*100/item.room.numberSeats}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
        
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#28A745'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#28A745'}}>{item.sitting}/{item.room.numberSeats}</p>
                                                    </div>  
                                                </div>}   

                                                {(item.status == "Bình thường")&&<div>
                                                    <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                        <div class="progress-bar bg-warning" role="progressbar" style={{width: `${item.sitting*100/item.room.numberSeats}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
        
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#FFC107'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#FFC107'}}>{item.sitting}/{item.room.numberSeats}</p>
                                                    </div>  
                                                </div>}  

                                                {(item.status == "Phòng đầy")&&<div>
                                                    <div class="progress" style={{height: '4px',marginTop: '20px', marginBottom: '5px'}}>
                                                        <div class="progress-bar bg-danger" role="progressbar" style={{width: `${item.sitting*100/item.room.numberSeats}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
        
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#DC3545'}}>{item.sitting}/{item.room.numberSeats}</p>
                                                    </div>  
                                                </div>}                                    
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                )
                            })}

                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}