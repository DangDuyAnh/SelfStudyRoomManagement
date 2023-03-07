import * as React from 'react';
import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import {Paper, Button, IconButton, Box} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { axiosPost, axiosGet } from "../../utils/api";

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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function BootstrapDialogTitle(props) {
const { children, onClose, ...other } = props;

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
    {children}
    {onClose ? (
        <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
        }}
        >
        <CloseIcon />
        </IconButton>
    ) : null}
    </DialogTitle>
);
}  

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#00a8e1",
        contrastText: 'white'
      },
    },
  });

export default function ScheduleConfigue(props){
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [date2, setDate2] = React.useState(new Date());
    const [date3, setDate3] = React.useState(new Date());
    const [open4, setOpen4] = React.useState(false);
    const [item4, setItem4] = React.useState({});
    const [startEffectDate, setStartEffectDate] = React.useState(new Date());
    const [endEffectDate, setEndEffectDate] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState(new Date());
    const [endTime, setEndTime] = React.useState(new Date());
    const [room, setRoom] = React.useState({});
    const [schedules, setSchedules] = React.useState([]);

    React.useEffect(() => {
        const getData = async () => {
            const res = await axiosGet("/servedTime/get/" + props.match.params.id);
            // console.log(res.data)
            setRoom(res.data.room);
            let map = new Map();
            let count = 0;
            let arr = []
            res.data.schedules.map((item) => {
                if (map.get(item.startEffectiveDate) >= 0) {
                    console.log("hi") 
                    arr[map.get(item.startEffectiveDate)].push(item);
                }
                else {
                    map.set(item.startEffectiveDate, count);
                    arr.push([]);
                    arr[count].push(item);
                    count++;
                }
            });
            console.log(map);
            setSchedules(arr);
        }
        getData();
    }, [open1, open2, open3, open4])

    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
    const handleClickOpen2 = (item) => {
        setDate2([item.startEffectiveDate, item.endEffectiveDate])
        setOpen2(true);
    }

    const handleClickOpen3 = (item) => {
        setDate3([item.startEffectiveDate, item.endEffectiveDate]);
        setOpen3(true);
    }

    const handleClickOpen4 = (item) => {
        setItem4(item);
        setOpen4(true);
    }
      const handleClose1 = () => {
        setOpen1(false);
      };
    
    const handleClose2 = () => {
        setOpen2(false);
    }

    const handleClose3 = () => {
        setOpen3(false);
    }

    const handleClose4 = () => {
        setOpen4(false);
    }

    const handleClick1 = async () => {
        await axiosPost("/servedTime/create", {
            idRoom: props.match.params.id,
            startEffectiveDate: startEffectDate,
            endEffectiveDate: endEffectDate,
            startTime: startTime,
            endTime: endTime
        });
        setOpen1(false)
    }

    const handleClick2 = async () => {
        await axiosPost("/servedTime/create", {
            idRoom: props.match.params.id,
            startEffectiveDate: date2[0],
            endEffectiveDate: date2[1],
            startTime: startTime,
            endTime: endTime
        });
        setOpen2(false)        
    }

    const handleClick3 = async () => {
        await axiosPost("/servedTime/deleteByDate", {
            idRoom: props.match.params.id,
            startEffectiveDate: date3[0],
            endEffectiveDate: date3[1]
        });
        setOpen3(false)    
    }

    const handleClick4 = async () => {
        await axiosGet("/servedTime/delete/" + item4._id);
        setOpen4(false);    
    }

    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <BootstrapDialog
                onClose={handleClose1}
                aria-labelledby="customized-dialog-title"
                open={open1}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose1}>
                Thêm lịch phục vụ
                </BootstrapDialogTitle>
                <DialogContent dividers>
                
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 1}}>
                    <Typography sx={{fontWeight: 'bold', width: '138px'}}>Phòng học: </Typography>
                    <Typography>D3 - 501</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Ngày áp dụng: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={startEffectDate}
                            inputFormat="DD.MM.YYYY"
                            onChange={(newValue) => {
                            setStartEffectDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                        sx={{
                                                            input: {
                                                                padding : "8px 8px", 
                                                                backgroundColor: 'white'
                                                            }, 
                                                            svg: {
                                                                backgroundColor: 'white'
                                                            }}} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Ngày kết thúc: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={endEffectDate}
                            inputFormat="DD.MM.YYYY"
                            onChange={(newValue) => {
                            setEndEffectDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                        sx={{
                                                            input: {
                                                                padding : "8px 8px", 
                                                                backgroundColor: 'white'
                                                            }, 
                                                            svg: {
                                                                backgroundColor: 'white'
                                                            }}} />}
                        />
                    </LocalizationProvider>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Giờ bắt đầu: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            value={startTime}
                            ampm={false}
                            onChange={(newValue) => {
                            setStartTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                        sx={{
                                                            input: {
                                                                padding : "8px 8px", 
                                                                backgroundColor: 'white'
                                                            }, 
                                                            svg: {
                                                                backgroundColor: 'white'
                                                            }}} />}
                        />
                    </LocalizationProvider>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Giờ kết thúc: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            value={endTime}
                            ampm={false}
                            onChange={(newValue) => {
                            setEndTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                        sx={{
                                                            input: {
                                                                padding : "8px 8px", 
                                                                backgroundColor: 'white'
                                                            }, 
                                                            svg: {
                                                                backgroundColor: 'white'
                                                            }}} />}
                        />
                    </LocalizationProvider>
                </Box>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClick1}>
                    Xác nhận
                </Button>
                </DialogActions>
            </BootstrapDialog>

            <BootstrapDialog
                onClose={handleClose2}
                aria-labelledby="customized-dialog-title"
                open={open2}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose2}>
                Thêm lịch phục vụ
                </BootstrapDialogTitle>
                <DialogContent dividers>
                
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 1}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Phòng học: </Typography>
                    <Typography>D3 - 501</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Ngày áp dụng: </Typography>
                    <Typography>{DateToString(date2[0])}</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Ngày kết thúc: </Typography>
                    <Typography>{DateToString(date2[1])}</Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Giờ bắt đầu: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            value={startTime}
                            ampm={false}
                            onChange={(newValue) => {
                            setStartTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                        sx={{
                                                            input: {
                                                                padding : "8px 8px", 
                                                                backgroundColor: 'white'
                                                            }, 
                                                            svg: {
                                                                backgroundColor: 'white'
                                                            }}} />}
                        />
                    </LocalizationProvider>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '130px'}}>Giờ kết thúc: </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            value={endTime}
                            ampm={false}
                            onChange={(newValue) => {
                            setEndTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} style={{backgroundColor: 'white'}} 
                                                        sx={{
                                                            input: {
                                                                padding : "8px 8px", 
                                                                backgroundColor: 'white'
                                                            }, 
                                                            svg: {
                                                                backgroundColor: 'white'
                                                            }}} />}
                        />
                    </LocalizationProvider>
                </Box>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClick2}>
                    Xác nhận
                </Button>
                </DialogActions>
            </BootstrapDialog>

            <BootstrapDialog
                onClose={handleClose3}
                aria-labelledby="customized-dialog-title"
                open={open3}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose3}>
                Xóa lịch phục vụ
                </BootstrapDialogTitle>
                <DialogContent dividers>
                
                <Box sx={{display: 'flex', mb: 2, mt: 1, flexWrap: 'wrap'}}>
                    <Typography>Xóa toàn bộ lịch từ &nbsp;</Typography>
                    <Typography sx={{fontWeight: 'bold'}}>{DateToString(date3[0])} </Typography>
                    <Typography>&nbsp;đến&nbsp;</Typography>
                    <Typography sx={{fontWeight: 'bold'}}>{DateToString(date3[1])}</Typography>
                    <Typography>&nbsp;?</Typography>
                </Box>

                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClick3}>
                    Xác nhận
                </Button>
                </DialogActions>
            </BootstrapDialog>

            <BootstrapDialog
                onClose={handleClose4}
                aria-labelledby="customized-dialog-title"
                open={open4}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose4}>
                Chi tiết lịch phục vụ
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{width: '400px'}}>
                
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2, mt: 1}}>
                    <Typography sx={{fontWeight: 'bold', width: '150px'}}>Phòng học: </Typography>
                    <Typography>D3 - 501</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '150px'}}>Ngày áp dụng: </Typography>
                    <Typography>{DateToString(item4.startEffectiveDate)}</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '150px'}}>Ngày kết thúc: </Typography>
                    <Typography>{DateToString(item4.endEffectiveDate)}</Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '150px'}}>Giờ bắt đầu: </Typography>
                    <Typography>{TimeToString(item4.startTime)}</Typography>
                </Box>

                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <Typography sx={{fontWeight: 'bold', width: '150px'}}>Giờ kết thúc: </Typography>
                    <Typography>{TimeToString(item4.endTime)}</Typography>
                </Box>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClick4} color="error">
                    Xóa 
                </Button>
                </DialogActions>
            </BootstrapDialog>

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
                                {room.idBuilding&&<li className="breadcrumb-item active"><a href="#">{room.idBuilding.name} - {room.name}</a></li>}
                                </ol>
                            </div>
                        </div>

                        {room.idBuilding&&<Paper sx={{mt: 3, p: 3}}>
                            <div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Phòng học: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>{room.name}</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Địa chỉ: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>Tòa {room.idBuilding.name} tầng {room.floor}</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Loại phòng: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>{room.typeRoom}</p>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <p class="booking-pay-line" style={{fontWeight:'bold', width: '200px', fontSize: '16px'}}>Hình thức đăng ký: </p>
                                    <p className="booking-pay-line" style={{fontSize:'16px'}}>{room.accessType}</p>
                                </div>

                                <div>
                                    <h1 style={{padding: 0, marginTop: '50px', fontSize: '18px', fontWeight: '600'}}
                                        >LỊCH PHỤC VỤ</h1>
                                    <div style={{width: '90px', height: '2px', backgroundColor: '#00a8e1', marginTop: '17px', marginBottom: '40px'}}/>

                                    {schedules.map((item, index) => 
                                    (
                                    <div style={{marginBottom: '40px'}}>
                                        <div style={{display: 'flex', alignItems: 'center'}}>
                                            <div style={{width: '5px', height: '38px', backgroundColor: '#616161'}}/>
                                            <div style={{width: '250px', height: '38px', backgroundColor: '#00a8e1', alignItems: 'center',
                                                display: 'flex'}}>
                                                <p style={{color: 'white', padding: 0, margin: 0, marginLeft: '15px', fontSize: '16px'
                                                    , fontWeight: '500'}}>{DateToString(item[0].startEffectiveDate)} - {DateToString(item[0].endEffectiveDate)}</p>
                                            </div>
                                            <IconButton aria-label="delete" color="success" sx={{ml: 1}} onClick = {() => {handleClickOpen2(item[0])}}>
                                                <AddCircleOutlineIcon fontSize='small'/>
                                            </IconButton>

                                            <IconButton aria-label="delete" color="error" onClick = {() => {handleClickOpen3(item[0])}}>
                                                <DeleteOutlineIcon fontSize='small'/>
                                            </IconButton>
                                        </div>
                                        <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', border: '1px solid black', padding: '15px'}}>
                                            {item.map((item) => (
                                            <div className="box-small-time" onClick={() => {handleClickOpen4(item)}}>
                                                <p className="small-time">{TimeToString(item.startTime)} - {TimeToString(item.endTime)}</p>
                                            </div>                                                
                                            ))}
                                        </div>  
                                    </div>
                                    ))
                                    }

                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained" onClick={handleClickOpen1}>
                                            Thêm
                                        </Button>
                                    </ThemeProvider>
                                </div>


                            </div>
                        </Paper>}
                    </div>
                </div>
            </div>
        </div>
    )
}