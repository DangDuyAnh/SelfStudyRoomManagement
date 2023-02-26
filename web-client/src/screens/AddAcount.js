import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar.js';
import Navbar from '../components/Navbar.js';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { axiosGet, axiosPost } from '../utils/api.js';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function AddAcount() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [role, setRole] = React.useState('Người quản lý');
    const [check, setCheck] = React.useState('done');
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);

    const [state, setState] = React.useState({
        vertical: 'top',
        horizontal: 'right',
      });
      const { vertical, horizontal } = state;

    useEffect(() => {
        console.log(check)
    }, [])
    const handleSubmit = async (e) => {
        if (email == '' || password == '' || username == '') {
            setError(true);
            return;
        }
        e.preventDefault();
        await axiosPost('/manager/create', {
            email: email,
            password: password,
            username: username,
            role: role
        })
        setEmail('');
        setPassword('');
        setUsername('');
        setSuccess(true);
    }
    return(
        <div className="wrapper">
        <Navbar />
        <Sidebar />

        <Snackbar open={success} autoHideDuration={2000} onClose={() => {setSuccess(false)}}
                anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
            <Alert onClose={() => {setSuccess(false)}} severity="success" sx={{ width: '100%' }}>
            Tạo tài khoản thành công!
            </Alert>
        </Snackbar>

        <Snackbar open={error} autoHideDuration={2000} onClose={() => {setError(false)}}
                anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
            <Alert onClose={() => {setError(false)}} severity="error" sx={{ width: '100%' }}>
            Hãy nhập đủ thông tin
            </Alert>
        </Snackbar>

        <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Tạo tài khoản</h1>
                            </div>
                        </div>

                        <div class="card" style={{margin: '20px 0px'}}>
                            <div class="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input type="text" className="form-control" placeholder="Email người quản lý" required 
                                    value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>

                                <div className="form-group">
                                    <label>Password: </label>
                                    <input type="password" className="form-control" placeholder="Mật khẩu" required 
                                    value={password} onChange={e => setPassword(e.target.value)}/>
                                </div>

                                <div className="form-group">
                                    <label>Username: </label>
                                    <input type="password" className="form-control" placeholder="Tên người dùng" required 
                                    value={username} onChange={e => setUsername(e.target.value)}/>
                                </div>

                                <div className="form-group">
                                    <label>Role</label>
                                    <select className="form-control" value={role} onChange={e => setRole(e.target.value)}>
                                        <option>Người quản lý</option>
                                        <option>admin</option>
                                    </select>
                                </div>

                                <div className="form-row" style={{marginTop: '20px', justifyContent: 'center'}}>
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Tạo tài khoản</button>
                                </div>
                            </form>
                        </div>
                        </div>

                </div>
            </div>
        </div>                                
        </div>
    )
}