import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function RegisterForm(){

    const values = [
        {},
        {}
    ];

    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Đơn đăng ký của Sinh viên</h1>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div style={{padding: '10px 50px'}}>
                                    <p style={{fontWeight: '500', fontSize: '26px', margin: 0, padding: 0}}>Đơn đăng ký</p>
                                    <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop: '8px', marginBottom: '20px'}}/>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Mã đơn: </p>
                                        <p className="booking-pay-line">#123456</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: "600px", display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Sinh viên đăng ký: </p>
                                            <p className="booking-pay-line">Nguyễn Văn A </p>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500'}}>MSSV:&nbsp;</p>
                                            <p className="booking-pay-line">20183471 </p>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Thời điểm tạo đơn: </p>
                                        <p className="booking-pay-line">50</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Loại phòng mong muốn: </p>
                                        <p className="booking-pay-line">Phòng học nhóm</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Ngày đăng ký: </p>
                                        <p className="booking-pay-line">Phòng học nhóm</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div style={{width: "600px", display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Giờ bắt đầu: </p>
                                            <p className="booking-pay-line">Nguyễn Văn A </p>
                                        </div>
                                        <div style={{display: "flex"}}>
                                            <p className="booking-pay-line" style={{fontWeight:'500'}}>Giờ kết thúc:&nbsp;</p>
                                            <p className="booking-pay-line">20183471 </p>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Số chỗ ngồi đăng ký: </p>
                                        <p className="booking-pay-line">10</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div>
                                            <p className="booking-pay-line" style={{fontWeight:'500' ,width: '190px'}}>Ghi chú: </p>
                                        </div>
                                        <div style={{textAlign: "justify"}}>
                                            <p className="booking-pay-line">Phòng học nhóm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div style={{padding: '10px 50px'}}>
                                    <h3 className="m-0">Phòng học chỉ định</h3>

                                <Box sx={{mt: 2}}>
                                    <Box sx={{display: "flex"}}>
                                        <Box sx={{display: "flex", alignItems: "center", height: ''}}>
                                            <Radio size="small" sx={{mr: 2}}/>
                                            <Typography>Phòng học đề xuất: </Typography>
                                        </Box>
                                        <Box sx={{ml: 3, marginTop : "7px"}}>
                                            <Box>
                                                <Typography>D3 301</Typography>
                                                <Box sx={{width: "250px", display: "flex", justifyContent: "space-between"}}>
                                                <div className='row-icon'>
                                                    <div>
                                                        <EventSeatIcon style={{fontSize: '20px', color: '#DC3545'}}/>
                                                    </div>
                                                    <p style={{fontWeight: '600', color: '#DC3545'}}>5/30</p>
                                                </div>  
                                                <div className='row-icon'>
                                                    <div>
                                                        <PeopleAltIcon style={{fontSize: '18px'}}/>                                               
                                                    </div>
                                                    <p>Phòng cá nhân</p>
                                                </div>
                                                </Box>
                                            </Box>
                                        </Box>                                        
                                    </Box>
                                </Box>

                                <Box sx={{mt: 2}}>
                                    <Box sx={{display: "flex"}}>
                                        <Box sx={{display: "flex", alignItems: "center", height: '', width: "195px"}}>
                                            <Radio size="small" sx={{mr: 2}}/>
                                            <Typography>Phòng học khác: </Typography>
                                        </Box>
                                        <Box sx={{ml: 3, marginTop : "7px"}}>
                                            <Box>
                                            </Box>
                                        </Box>                                        
                                    </Box>
                                </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}