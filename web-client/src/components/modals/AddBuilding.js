import { axiosPost } from "../../utils/api"
import * as React from 'react';
import { authenticationService} from "../../utils/authenticationService";

export default function AddBuilding(){

    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [nameErr, setNameErr] = React.useState({});
    const [addErr, setAddErr] = React.useState({});

    const handleSubmit = async () => {
        let check = true
        if (name == '') {
            setNameErr({
                status: true,
                text: 'Tên tòa nhà không nên để trống'
            });
            check=false
        } else {
            console.log('hi')
            setNameErr({
                status: false,
                text: ''
            });
        };
        if (address == '') {
            setAddErr({
                status: true,
                text: 'Địa chỉ không nên để trống'
            })
            check=false
        } else {
            setAddErr({
                status: false,
                text: ''
            });
        }
        if (!check) return;
        try {
            const res = await axiosPost('/building/create', {
              name: name,
              address: address
            })
            if (res.status == 201) {
              window.location = '/'
            } else {
              setNameErr({
                status: true,
                text: 'Tên tòa nhà đã tồn tại'
            });  
            }
            } catch (e) {
                console.log(e)
                setNameErr({
                    status: true,
                    text: 'Tên tòa nhà đã tồn tại'
                });  
            }

    }

    return(
    <>
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thêm tòa nhà</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên tòa nhà</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={name} onChange={(e) => {setName(e.target.value)}}/>
                        {nameErr.status&&<small id="emailHelp" className="form-text text-muted"><span style={{color: 'red'}}>{nameErr.text}</span></small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Địa chỉ tòa nhà</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                        {addErr.status&&<small id="emailHelp" className="form-text text-muted"><span style={{color: 'red'}}>{addErr.text}</span></small>}
                    </div>
                    </div>

                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Thêm tòa nhà</button>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}