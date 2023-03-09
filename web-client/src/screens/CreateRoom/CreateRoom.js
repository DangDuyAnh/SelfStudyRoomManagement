import Sidebar from '../../components/Sidebar.js';
import Navbar from '../../components/Navbar.js';
import * as React from 'react';
import { axiosGet, axiosPost } from '../../utils/api.js';

export default function CreateRoom(props) {
    const [building, setBuilding] = React.useState({});
    const [floors, setFloors] = React.useState([]);
    const [floor, setFloor] = React.useState(1);
    const [errorName, setErrorName] = React.useState(false);
    const [name, setName] = React.useState('');
    const [numberSeats, setNumberSeats] = React.useState('');
    const [accessType, setAccessType] = React.useState("Phòng tự do");
    const [typeRoom, setTypeRoom] = React.useState("Phòng học nhóm");
    const [numberAirCondition, setNumberAirCondition] = React.useState('');
    const [numberPowerOutlet, setNumberPowerOutlet] = React.useState('');

    const handleClick = async (e) => {
        e.preventDefault();
        try {
        const res = await axiosPost("/room/create", {
            idBuilding: building._id,
            name: name,
            floor: parseInt(floor),
            accessType: accessType,
            numberSeats: parseInt(numberSeats),
            typeRoom: typeRoom,
            numberAirCondition: parseInt(numberAirCondition),
            numberPowerOutlet: parseInt(numberPowerOutlet)
        })

        if (parseInt(floor) > building.numberFloor) {
            await axiosPost("/building/update/" + props.match.params.id, {
                numberFloor: parseInt(floor)
            })
        }
        window.location = "/building/" + props.match.params.id
        } catch(e) {
            setErrorName(true)
        }
    }
    React.useEffect(() => {
        const getData = async () => {
            const res = await axiosGet('/building/get/' + props.match.params.id);
            let building = res.data
            setBuilding(building);
            let tempArr = [];
            for (let i = 1; i <= (building.numberFloor + 1); i++) {
                tempArr.push(i);
            }
            setFloors(tempArr)
        }
        getData();
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
                                <h1 className="m-0">Tạo phòng mới</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">Thiết lập</li>
                                <li className="breadcrumb-item active"><a href={"/building/" + building._id} >{building.name}</a></li>
                                <li className="breadcrumb-item active"><a href="#">Tạo phòng mới</a></li>
                                </ol>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Tòa nhà</label>
                                    <input type="text" className="form-control"disabled value={building.name} />
                                </div>
                                <div className="form-group">
                                    <label>Tầng</label>
                                    <select className="form-control" value={floor} onChange={e => setFloor(e.target.value)}>
                                        {floors.map((item) => {return(
                                            <option>{item}</option>
                                        )})}
                                    </select>
                                </div>

                                {errorName?
                                <div className="form-group">
                                <label>Tên phòng</label>
                                <input type="text" className="form-control is-invalid" placeholder="Tên phòng" value={name}
                                onChange={e => setName(e.target.value)} required />
                                    <div className="invalid-feedback">
                                        Tên phòng đã tồn tại
                                    </div>
                                </div>                                
                                :<div className="form-group">
                                    <label>Tên phòng</label>
                                    <input type="text" className="form-control" placeholder="Tên phòng" value={name}
                                    onChange={e => setName(e.target.value)} required />
                                </div>
                                }

                                <div className="form-group">
                                <div>
                                    <label>Số lượng chỗ ngồi</label>
                                    <input type="text" className="form-control" placeholder="Số ghế" required value={numberSeats}
                                    onChange = {e => setNumberSeats(e.target.value)}/>
                                </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <label>Loại phòng</label>
                                    <select className="form-control" value={typeRoom} onChange={e => setTypeRoom(e.target.value)}>
                                        <option>Phòng học nhóm</option>
                                        <option>Phòng cá nhân</option>
                                    </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label>Quyền vào phòng</label>
                                    <select className="form-control" value={accessType} onChange={e => setAccessType(e.target.value)}>
                                        <option>Phòng tự do</option>
                                        <option>Phòng đăng ký</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>Số lượng ổ điện</label>
                                        <input type="text" className="form-control " placeholder="Số ổ điện" required
                                        value={numberPowerOutlet} onChange={e => setNumberPowerOutlet(e.target.value)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Số lượng điều hòa</label>
                                        <input type="text" className="form-control " placeholder="Số ổ điện" required 
                                        value={numberAirCondition} onChange={e => setNumberAirCondition(e.target.value)}/>
                                    </div>
                                </div>

                                <div className="form-row" style={{marginTop: '20px', justifyContent: 'center'}}>
                                <button type="submit" className="btn btn-primary" onClick={handleClick}>Tạo phòng</button>
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