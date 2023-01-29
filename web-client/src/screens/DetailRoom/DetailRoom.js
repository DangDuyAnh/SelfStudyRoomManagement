import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import './DetailRoom.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function DetailRoom(){
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

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
                                <li className="breadcrumb-item">Chi tiết</li>
                                <li className="breadcrumb-item active"><a href="#">D3</a></li>
                                <li className="breadcrumb-item active"><a href="#">201</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                                <div style={{padding: '10px 50px'}}>
                                    <p style={{fontWeight: '500', fontSize: '26px', margin: 0, padding: 0}}>Phòng 201</p>
                                    <div style={{width: '100%', height: '1px', backgroundColor: 'black', marginTop: '8px', marginBottom: '20px'}}/>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Tòa: </p>
                                        <p className="booking-pay-line">D3</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Tầng: </p>
                                        <p className="booking-pay-line">2</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Số lượng chỗ ngồi: </p>
                                        <p className="booking-pay-line">50</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Loại phòng: </p>
                                        <p className="booking-pay-line">Phòng học nhóm</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Quyền vào phòng: </p>
                                        <p className="booking-pay-line">Quét mã QR</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Số ổ điện: </p>
                                        <p className="booking-pay-line">10</p>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Số điều hòa: </p>
                                        <p className="booking-pay-line">2</p>
                                    </div>
                                    <p className="booking-pay-line" style={{fontWeight:'500' ,width: '150px'}}>Mã QR: </p>
                                    <div style={{maxWidth: '90vw', overflow: 'hidden'}}>
                                    <img src="https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg" style={{width: '150px', height: '150px', maxWidth: '100%', marginLeft: '150px'}}/>
                                    </div>
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