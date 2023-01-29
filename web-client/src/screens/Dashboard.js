import React, { Component } from 'react'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddBuilding from '../components/modals/AddBuilding.js';

import Sidebar from '../components/Sidebar.js';
import Navbar from '../components/Navbar.js';
export default class Dashboard extends Component {
  render() {
    return (
    <div className="wrapper">
        <Navbar />
        <Sidebar />
        <AddBuilding />

        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Thiết lập chung</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><a href="#">Thiết lập</a></li>
                            <li className="breadcrumb-item active">Chung</li>
                            </ol>
                        </div>
                    </div>

                    <div>
                    <Button variant="contained" startIcon={<AddCircleIcon />} style = {{margin: '20px 0px'}} data-toggle="modal" data-target="#exampleModal">
                        Tòa nhà mới
                    </Button>

                    <div>
                        <div class="card">
                            <div class="card-body">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                    <div>
                                        <p style={{fontSize: '24px', fontWeight: '600'}}>Tòa D3</p>
                                        <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Địa chỉ: </span>Temp</p>
                                        <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Số tầng: </span>Temp</p>
                                        <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Số phòng tự học: </span>Temp</p>
                                    </div>
                                    <Stack direction="row">
                                    <IconButton aria-label="Edit" title="Edit" color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="Configure" title="Configure" style={{color: '#f9a825'}}>
                                        <ApartmentIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" title="Delete" color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                    </Stack>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                    <div>
                                        <p style={{fontSize: '24px', fontWeight: '600'}}>Tòa D3</p>
                                        <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Địa chỉ: </span>Temp</p>
                                        <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Số tầng: </span>Temp</p>
                                        <p style={{margin: 0, padding: 0}}><span style={{fontWeight: '500'}}>Số phòng tự học: </span>Temp</p>
                                    </div>
                                    <Stack direction="row">
                                    <IconButton aria-label="Edit" title="Edit" color="primary">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="Configure" title="Configure" style={{color: '#f9a825'}}>
                                        <ApartmentIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete" title="Delete" color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                    </Stack>
                                </div>
                            </div>
                        </div>

                            {/* <div>
                                    <div style={{display: 'flex'}}>
                                        <p style={{margin: 0, padding: 0,fontWeight: '500', width: '120px'}}>Địa chỉ:</p>
                                        <p style={{margin: 0, padding: 0}}>Temp</p>
                                    </div>
                                </div>
                                <div>
                                    <div style={{display: 'flex'}}>
                                        <p style={{margin: 0, padding: 0,fontWeight: '500', width: '120px'}}>Số tầng:</p>
                                        <p style={{margin: 0, padding: 0}}>Temp</p>
                                    </div>
                                </div>

                                <div>
                                <div style={{display: 'flex'}}>
                                        <p style={{margin: 0, padding: 0,fontWeight: '500', width: '120px'}}>Số phòng tự học:</p>
                                        <p style={{margin: 0, padding: 0}}>Temp</p>
                                    </div>
                            </div> */}
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
  }
}
