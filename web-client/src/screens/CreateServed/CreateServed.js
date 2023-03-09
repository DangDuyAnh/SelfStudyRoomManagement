import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import * as React from 'react';
import { axiosGet, axiosPost } from '../../utils/api.js';

export default function CreateServed(props) {
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [fileExcel, setFileExcel] = React.useState();

    const handleClick = async (e) => {
        e.preventDefault();
        const fileReader = new FileReader();
        let bb = fileReader.readAsArrayBuffer(fileExcel);
        try {
        const res = await axiosPost("/servedTime/createByExcel", {
            startEffectiveDate: startTime,
            endEffectiveDate: endTime,
            file: bb
        })
        window.location = "/service-schedule"
        } catch(e) {
            
        }
    }
    // React.useEffect(() => {
    //     const getData = async () => {
    //         const res = await axiosGet('/building/get/' + props.match.params.id);
    //         let building = res.data
    //         setBuilding(building);
    //         let tempArr = [];
    //         for (let i = 1; i <= (building.numberFloor + 1); i++) {
    //             tempArr.push(i);
    //         }
    //         setFloors(tempArr)
    //     }
    //     getData();
    // }, [])

    return(
        <div className="wrapper">
            <Navbar />
            <Sidebar />

            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Tạo lịch phục vụ mới</h1>
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
                                {/* <div className="form-group">
                                    <label>Tòa nhà</label>
                                    <input type="text" className="form-control"disabled value={building.name} />
                                </div> */}
                                

                                <div className="form-group">
                                    <label>Ngày áp dụng</label>
                                    <input type="datetime-local" className="form-control" placeholder="yyyy-mm-dd" value={startTime}
                                    onChange={e => setStartTime(e.target.value)} required />
                                </div>
                                

                                <div className="form-group">
                                <div>
                                    <label>Ngày hết hạn</label>
                                    <input type="datetime-local" className="form-control" placeholder="Số ghế" required value={endTime}
                                    onChange = {e => setEndTime(e.target.value)}/>
                                </div>
                                </div>

                                <div className="form-group">
                                <div>
                                    <label>Thêm file Excel</label>
                                    <input type="file" className="form-control" 
                                    onChange = {e => {
                                        setFileExcel(e.target.files[0]);
                                        console.log(e.target.files[0]);
                                    }}/>
                                </div>
                                </div>

                                <div className="form-row" style={{marginTop: '20px', justifyContent: 'center'}}>
                                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
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