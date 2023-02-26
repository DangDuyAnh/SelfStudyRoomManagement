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
                                    <img src="data:image/png;base64,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" style={{width: '150px', height: '150px', maxWidth: '100%', marginLeft: '150px'}}/>
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