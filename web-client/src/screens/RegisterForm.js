import * as React from "react";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import {axiosGet, axiosPost} from "../utils/api" ;
import CircularProgress from '@mui/material/CircularProgress';
import PersonIcon from '@mui/icons-material/Person';

export default function RegisterForm(props){
    const [selectedValue, setSelectedValue] = React.useState("a");
    const [form, setForm] = React.useState({});
    const [values, setValues] = React.useState([]);
    const [process, setProcess] = React.useState(true);
    const [choosedRoom, setChoosedRoom] = React.useState();
    const getData = async () => {
        let res = await axiosGet("/registerForm/get/" + props.match.params.id)
        setForm(res.data);
        let res2 = await axiosPost("/room/status-for-rf", {
            date: res.data.dateRegister,
            startTime: res.data.startTime,
            endTime: res.data.endTime,
            typeRoom: res.data.typeRoom
        })
        console.log(res2)
        setValues(res2.data)
        setProcess(false)
    }

    React.useState(() => {
        getData();
    }, []);


    const renderCode = (code) => {
        if (!code) return null;
        return code.toString().substring(code.length - 5)
      }

      const FormatTime = (data) => {
        let currentYear = new Date().getFullYear();
        let time = new Date(data);
        let showTime;
        let singleMinutes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let minute = time.getMinutes().toString();
        if (singleMinutes.includes(minute)) minute = '0' + minute;
        if (currentYear === time.getFullYear()) {
          showTime = `${time.getDate()}/${time.getMonth()+1} lúc ${time.getHours()}:${minute}`
        } else {
          showTime = `${time.getDate()}/${time.getMonth()+1}/${time.getFullYear()} lúc ${time.getHours()}:${minute}`
        } 
        return showTime;
      }

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

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    const chosingRoom = async (event, value) => {
    setChoosedRoom(value)
    }

    const handleForm = async () => {
        if (selectedValue == "a") {
            await axiosPost("/registerForm/update/" + props.match.params.id, {
                status: 1,
                assignedRoom: values[0].room._id
            });
            window.location = "/waiting-register"
        } else {
            await axiosPost("/registerForm/update/" + props.match.params.id, {
                status: 1,
                assignedRoom: choosedRoom.room._id
            });
            window.location = "/waiting-register"
        }
    }

    const deleteForm = async () => {
        await axiosGet('/registerForm/delete/' + props.match.params.id);
        window.location = "/waiting-register"
    }

    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar focus="Đơn đăng ký"/>

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Đơn đăng ký của Sinh viên</h1>
                            </div>
                        </div>

                        {form.idStudent&&
                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div style={{padding: '10px 50px'}}>
                                    <p style={{fontWeight: '500', fontSize: '26px', margin: 0, padding: 0}}>Đơn đăng ký</p>
                                    <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop: '8px', marginBottom: '20px'}}/>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Mã đơn: </p>
                                        <p className="booking-pay-line">#{renderCode(form._id)}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: "600px", display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Sinh viên đăng ký: </p>
                                            <p className="booking-pay-line">{form.idStudent.name}</p>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500'}}>MSSV:&nbsp;</p>
                                            <p className="booking-pay-line">{form.idStudent.studentCode} </p>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Thời điểm tạo đơn: </p>
                                        <p className="booking-pay-line">{FormatTime(form.createdAt)}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Loại phòng mong muốn: </p>
                                        <p className="booking-pay-line">{form.typeRoom}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Ngày đăng ký: </p>
                                        <p className="booking-pay-line">{DateToString(form.dateRegister)}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: "600px", display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Giờ bắt đầu: </p>
                                            <p className="booking-pay-line">{TimeToString(form.startTime)}</p>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500'}}>Giờ kết thúc:&nbsp;</p>
                                            <p className="booking-pay-line">{TimeToString(form.endTime)}</p>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Số chỗ ngồi đăng ký: </p>
                                        <p className="booking-pay-line">{form.numberSeats}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Ghi chú: </p>
                                        </div>
                                        <div style={{textAlign: "justify"}}>
                                            <p className="booking-pay-line">{form.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div style={{padding: '10px 50px'}}>
                                    <h3 className="m-0">Phòng học chỉ định</h3>

                                <Box sx={{mt: 2}}>
                                    <Box sx={{display: "flex"}}>
                                        <Box sx={{display: "flex", alignItems: "center", height: ''}}>
                                            <Radio size="small" sx={{mr: 2}}        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"/>
                                            <Typography>Phòng học đề xuất: </Typography>
                                        </Box>
                                        {process&&<CircularProgress size="small"/>}
                                        {(values.length>0)&&<Box sx={{ml: 3, marginTop : "7px"}}>
                                            <Box>
                                                <Typography>{values[0].room.idBuilding.name} {values[0].room.name}</Typography>
                                                <Box sx={{width: "250px", display: "flex", justifyContent: "space-between"}}>
                                                {(values[0].status == "Phòng vắng")&&<div>        
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#28A745'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#28A745'}}>{values[0].sitting}/{values[0].room.numberSeats}</p>
                                                    </div>  
                                                </div>}   

                                                {(values[0].status == "Bình thường")&&<div>
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#FFC107'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#FFC107'}}>{values[0].sitting}/{values[0].room.numberSeats}</p>
                                                    </div>  
                                                </div>}  

                                                {(values[0].status == "Phòng đầy")&&<div>
                                                            <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#DC3545'}}>{values[0].sitting}/{values[0].room.numberSeats}</p>
                                                    </div>  
                                                </div>} 

                                                {values[0].room.typeRoom == "Phòng học nhóm"?
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
                                                </Box>
                                            </Box>
                                        </Box>
                                        }                                        
                                    </Box>
                                </Box>

                                <Box sx={{mt: 2}}>
                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                        <Box sx={{display: "flex", alignItems: "center", width: "195px"}}>
                                            <Radio size="small" sx={{mr: 2}}         checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"/>
                                            <Typography>Phòng học khác: </Typography>
                                        </Box>
                                        <Box sx={{ml: 3, marginTop : "7px"}}>
                                            <Box>
                                            <Autocomplete
                                                id="country-select-demo"
                                                sx={{ width: 300 }}
                                                options={values}
                                                onChange={chosingRoom}
                                                autoHighlight
                                                getOptionLabel={(option) => `${option.room.idBuilding.name} ${option.room.name}`}
                                                renderOption={(props, option) => (
                                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                                        <Box>
                                                            <Typography sx={{fontWeight: "600"}}>{option.room.idBuilding.name} {option.room.name}</Typography>
                                                            <Box sx={{width: "250px", display: "flex", justifyContent: "space-between"}}>
                                                            {(option.status == "Phòng vắng")&&<div>        
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#28A745'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#28A745'}}>{option.sitting}/{option.room.numberSeats}</p>
                                                    </div>  
                                                </div>}   

                                                {(option.status == "Bình thường")&&<div>
                                                    <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#FFC107'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#FFC107'}}>{option.sitting}/{option.room.numberSeats}</p>
                                                    </div>  
                                                </div>}  

                                                {(option.status == "Phòng đầy")&&<div>
                                                            <div className='row-icon'>
                                                        <div>
                                                            <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                        </div>
                                                        <p style={{fontWeight: '600', color: '#DC3545'}}>{option.sitting}/{option.room.numberSeats}</p>
                                                    </div>  
                                                </div>} 

                                                {option.room.typeRoom == "Phòng học nhóm"?
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
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                    {...params}
                                                    label="Chọn một phòng học"
                                                    inputProps={{
                                                        ...params.inputProps,
                                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                                    }}
                                                    />
                                                )}
                                            />
                                            </Box>
                                        </Box>                                        
                                    </Box>
                                </Box>
                                </div>
                            </div>
                        </div>

                        <div style={{margin: "60px 0px 100px 0px", display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="success" sx={{mr: 5}} onClick={handleForm}>
                            Xác nhận
                        </Button>
                        <Button variant="contained" color="error" onClick={deleteForm}>
                            Hủy đơn
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}