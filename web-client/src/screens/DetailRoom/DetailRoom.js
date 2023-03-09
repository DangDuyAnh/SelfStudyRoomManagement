import * as React from "react";
import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import './DetailRoom.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { axiosGet } from '../../utils/api.js';

export default function DetailRoom(props){
    const [room, setRoom] = React.useState({idBuilding: ""});

    const getData = async () => {
        const res = await axiosGet("/room/get/" + props.match.params.id);
        setRoom(res.data)
    }
    React.useEffect(() => {
        getData()
    }, [])
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar focus="Thiết lập"/>

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Thông tin phòng</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Thiết lập</li>
                                <li className="breadcrumb-item active"><a href={"/building/" + room.idBuilding._id}>{room.idBuilding.name}</a></li>
                                <li className="breadcrumb-item active"><a href="#">{room.name}</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div style={{padding: '10px 50px'}}>
                                    <p style={{fontWeight: '500', fontSize: '26px', margin: 0, padding: 0}}>Phòng {room.name}</p>
                                    <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop: '8px', marginBottom: '20px'}}/>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Tòa: </p>
                                        <p className="booking-pay-line">{room.idBuilding.name}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Tầng: </p>
                                        <p className="booking-pay-line">{room.floor}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Số lượng chỗ ngồi: </p>
                                        <p className="booking-pay-line">{room.numberSeats}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Loại phòng: </p>
                                        <p className="booking-pay-line">{room.typeRoom}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Quyền vào phòng: </p>
                                        <p className="booking-pay-line">{room.accessType}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Số ổ điện: </p>
                                        <p className="booking-pay-line">{room.numberPowerOutlet}</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Số điều hòa: </p>
                                        <p className="booking-pay-line">{room.numberAirCondition}</p>
                                    </div>

                                    {(room.accessType == "Phòng tự do")&&<div>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Mã QR: </p>
                                        <div style={{maxWidth: '90vw', overflow: 'hidden'}}>
                                        <img src={room.qrCode} style={{width: '150px', height: '150px', maxWidth: '100%', marginLeft: '150px'}}/>
                                        </div>
                                    </div>
                                    }
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <button type="button" class="btn btn-primary" style={{margin: "5px"}}>
                                        <i class="fas fa-pen"></i> Chỉnh sửa
                                    </button>
                                    <button type="button" class="btn btn-danger" style={{margin: "5px"}}>
                                        <i class="fas fa-trash"></i> Xóa phòng
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}