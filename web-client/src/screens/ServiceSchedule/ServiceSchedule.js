import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import './ServiceSchedule.css';

export default function ServiceSchedule() {
    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Thiết lập lịch</h1>
                            </div>
                        </div>

                        <label>Tòa nhà</label>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label>Tòa nhà</label>
                                <input type="text" className="form-control" placeholder="Nhập tòa nhà" required />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Tòa nhà</label>
                                <input type="text" className="form-control" placeholder="Nhập tòa nhà" required />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Tòa nhà</label>
                                <input type="text" className="form-control" placeholder="Nhập tòa nhà" required />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}