import * as React from 'react';
import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import './DetailBuilding.css';

import EventSeatIcon from '@mui/icons-material/EventSeat';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import {axiosGet} from "../../utils/api";

export default function DetailBuilding(props) {
    const [building, setBuilding] = React.useState({});
    const [rooms, setRooms] = React.useState([]);
    const [NQRRoom, setNQRRoom] = React.useState('N/A');
    const [NPersonalQRRoom, setNPersonalQRRoom] = React.useState('N/A');
    const [NReRoom, setNReRoom] = React.useState('N/A');
    const [NPersonalReRoom, setNPersonalReRoom] = React.useState('N/A');

    React.useEffect(() => {
        const getData = async () => {
            let res = await axiosGet("/building/findRooms/" + props.match.params.id)
            let building = res.data.building;
            setBuilding(building);
            let allRooms = res.data.rooms;

            let QRRoom = allRooms.filter(item => item.accessType == 'qrcode')
            let PersonalQRRoom = QRRoom.filter(item => item.typeRoom == 'Phòng cá nhân');
            setNQRRoom(QRRoom.length)
            setNPersonalQRRoom(PersonalQRRoom.length)

            let ReRoom = allRooms.filter(item => item.accessType == 'register')
            let PersonalReRoom = QRRoom.filter(item => item.typeRoom == 'Phòng cá nhân');
            setNReRoom(ReRoom.length)
            setNPersonalReRoom(PersonalReRoom.length)

            let rooms = [];
            let floors = building.numberFloor;
            for (let i = floors; i > 0; i--) {
                rooms.push(allRooms.filter(item => item.floor == i));
            }
            setRooms(rooms);
        }
        getData()
    })

    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Thiết lập {building.name}</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Thiết lập</li>
                                <li className="breadcrumb-item">Chi tiết</li>
                                <li className="breadcrumb-item active"><a href="#">{building.name}</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div>
                                    <p style={{fontSize: '24px', fontWeight: '600'}}>Thông tin</p>
                                    <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Tên: </span>{building.name}</p>
                                    <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Địa chỉ: </span>{building.address}</p>
                                    <p style={{margin: 0, padding: 0, fontWeight: '500'}}>Số lượng phòng tự học</p>
                                    <ul>
                                        <li><p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500', color: '#1976d2'}}>Phòng tự do: </span>{NQRRoom} ({(NQRRoom - NPersonalQRRoom)} phòng học nhóm, {NPersonalQRRoom} phòng học cá nhân)</p></li>
                                        <li><p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500', color: '#6a1b9a'}}>Phòng cần đăng ký: </span>{NReRoom} ({(NReRoom - NPersonalReRoom)} phòng học nhóm, {NPersonalReRoom} phòng học cá nhân)</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="card text-center">
                            <div class="card-header">
                                <h3 style={{fontSize: '24px', fontWeight: '600', margin: 0, padding: 0}}>Các phòng học</h3>
                            </div>
                            <div class="card-body">
                                {rooms.map((item, index) => {
                                    return(
                                        <div class="floor">
                                        <div style={{ width: '220px', marginTop: '10px'}}>
                                            <p style={{fontSize: '18px', fontWeight: '600', fontStyle: 'italic'}}>Tầng {building.numberFloor - index}</p>
                                        </div>
                                        <div className='rooms'>
                                            {item.map((i) => {
                                                return(
                                                    <div className='card my-card text-center '>
                                                        <div className='card-header'>
                                                            <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>{i.name}</h3>
                                                        </div>
                                                        <div className='card-body'>
                                                            <div className='row-icon'>
                                                            <div>
                                                                <EventSeatIcon style={{fontSize: '20px'}}/>
                                                            </div>
                                                            <p>{i.numberSeats} chỗ ngồi</p>
                                                            </div>

                                                            {i.accessType == "qrcode"?
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
            
                                                            {i.typeRoom == "Phòng học nhóm"?
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
                                                        </div>
                                                    </div>
                                                )
                                            })}                                            
                                        </div>
                                        </div>
                                )})}
                            </div>
                            <div class="card-footer clearfix">
                            <button type="button" class="btn btn-primary float-right" onClick={() => {window.location = '/create-room/' + props.match.params.id}}> <i class="fas fa-plus"></i> Thêm phòng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}