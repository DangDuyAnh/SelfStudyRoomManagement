import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import './DetailBuilding.css';

import EventSeatIcon from '@mui/icons-material/EventSeat';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EmailIcon from '@mui/icons-material/Email';

export default function DetailBuilding() {
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Thiết lập D3</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Thiết lập</li>
                                <li className="breadcrumb-item">Chi tiết</li>
                                <li className="breadcrumb-item active"><a href="#">D3</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div>
                                    <p style={{fontSize: '24px', fontWeight: '600'}}>Thông tin</p>
                                    <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Tên: </span>D3</p>
                                    <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Địa chỉ: </span>Temp</p>
                                    <p style={{margin: 0, padding: 0, fontWeight: '500'}}>Số lượng phòng tự học</p>
                                    <ul>
                                        <li><p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500', color: '#1976d2'}}>Phòng tự do: </span>Temp (5 phòng học nhóm, 6 phòng học cá nhân)</p></li>
                                        <li><p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500', color: '#6a1b9a'}}>Phòng cần đăng ký: </span>Temp (5 phòng học nhóm, 6 phòng học cá nhân)</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="card text-center">
                            <div class="card-header">
                                <h3 style={{fontSize: '24px', fontWeight: '600', margin: 0, padding: 0}}>Các phòng học</h3>
                            </div>
                            <div class="card-body">
                                <div class="floor">
                                    <div style={{ width: '220px', marginTop: '10px'}}>
                                        <p style={{fontSize: '18px', fontWeight: '600', fontStyle: 'italic'}}>Tầng 2</p>
                                    </div>
                                    <div className='rooms'>
                                        <div className='card my-card text-center '>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 chỗ ngồi</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center'>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 ghế</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center '>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 chỗ ngồi</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center'>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 ghế</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center '>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 chỗ ngồi</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center'>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 ghế</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center '>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 chỗ ngồi</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='card my-card text-center'>
                                            <div className='card-header'>
                                                <h3 style={{margin: 0, padding: 0, fontSize: '16px', fontWeight: '600'}}>201</h3>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row-icon'>
                                                <div>
                                                    <EventSeatIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>20 ghế</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <QrCodeIcon style={{fontSize: '20px'}}/>
                                                </div>
                                                <p>Phòng tự do</p>
                                                </div>

                                                <div className='row-icon'>
                                                <div>
                                                    <PeopleAltIcon style={{fontSize: '20px'}}/>                                               
                                                </div>
                                                <p>Phòng cá nhân</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="floor"></div>
                            </div>
                            <div class="card-footer clearfix">
                            <button type="button" class="btn btn-primary float-right" onClick={() => {window.location = '/create-room'}}> <i class="fas fa-plus"></i> Thêm phòng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}