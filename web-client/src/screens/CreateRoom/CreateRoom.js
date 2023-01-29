import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';

export default function CreateRoom() {
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Tạo phòng mới</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Thiết lập</li>
                                <li className="breadcrumb-item">Chi tiết</li>
                                <li className="breadcrumb-item active"><a href="#">D3</a></li>
                                <li className="breadcrumb-item active"><a href="#">Tạo phòng mới</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Tòa nhà</label>
                                    <input type="text" className="form-control"disabled placeholder="D3" />
                                </div>
                                <div className="form-group">
                                    <label>Tầng</label>
                                    <select className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Tên phòng</label>
                                    <input type="text" className="form-control is-valid" placeholder="Tên phòng" defaultValue="202" required />
                                </div>

                                <div className="form-group">
                                <div>
                                    <label>Số lượng chỗ ngồi</label>
                                    <input type="text" className="form-control is-invalid" placeholder="Số ghế" required />
                                    <div className="invalid-feedback">
                                        Hãy nhập số chỗ ngồi hợp lệ
                                    </div>
                                </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <label>Loại phòng</label>
                                    <select className="form-control">
                                        <option>Phòng học nhóm</option>
                                        <option>Phòng cá nhân</option>
                                    </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label>Quyền vào phòng</label>
                                    <select className="form-control">
                                        <option>Mã QR</option>
                                        <option>Đơn đăng ký</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Số lượng ổ điện</label>
                                        <input type="text" className="form-control " placeholder="Số ổ điện" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Số lượng điều hòa</label>
                                        <input type="text" className="form-control " placeholder="Số ổ điện" required />
                                    </div>
                                </div>

                                <div className="form-row" style={{marginTop: '20px', justifyContent: 'center'}}>
                                <button type="submit" className="btn btn-primary">Tạo phòng</button>
                                </div>
                            </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}