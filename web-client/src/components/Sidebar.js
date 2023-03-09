import React, { Component, useEffect } from 'react';
import { axiosGet } from '../utils/api.js';
import Logo from "../assets/logo.png";
import { authenticationService } from '../utils/authenticationService.js';

export default function Sidebar(props){

    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <div style={{height: "50px", display: 'flex', alignItems: 'center'}}>
            <div style={{marginRight: '10px'}}>
              <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
            </div>
            <div style={{width: "120px",  whiteSpace: 'normal'}}>
              <span style={{wordWrap: 'normal', fontSize: '16px'}}>QUẢN LÝ PHÒNG TỰ HỌC</span>
            </div>
          
          </div>
        </a>
        <div className="sidebar">
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-header">QUẢN LÝ THÔNG TIN PHÒNG</li>
              
              <li className="nav-item menu-open">
                <a href="/" className={(props.focus == "Thiết lập")?"nav-link active":"nav-link"}>
                  <i className="fas fa-building nav-icon"></i>
                  <p>
                    Thiết lập chung
                  </p>
                </a>
              </li>

              <li className="nav-header">QUẢN LÝ SỬ DỤNG PHÒNG</li>
              <li className="nav-item">
                <a href="/room-status" className={(props.focus == "Tình trạng phòng")?"nav-link active":"nav-link"}>
                  <i className="fas fa-building-user nav-icon"/>
                  <p>
                    Tình trạng phòng 
                  </p>
                </a>             
              </li>

              <li className="nav-item">
                <a href="/service-schedule" className={(props.focus == "Lịch phục vụ")?"nav-link active":"nav-link"}>
                <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Lịch phục vụ
                  </p>
                </a>
              </li>
              
              <li className="nav-item">
                <a href="/waiting-register" className={(props.focus == "Đơn đăng ký")?"nav-link active":"nav-link"}>
                <i className="nav-icon far fa-envelope" />
                  <p>
                    Đơn đăng ký
                  </p>
                </a>

              </li>

              {authenticationService.getUser().role=="admin"&&
              <>
              <li className="nav-header">QUẢN LÝ NGƯỜI DÙNG</li>

              <li className="nav-item">
                <a href="/create-account" className={(props.focus == "Người dùng")?"nav-link active":"nav-link"}>
                <i class="fa-solid fa-user-plus nav-icon" style={{fontSize: '14px'}}></i>
                  <p>
                    Thêm người dùng
                  </p>
                </a>
              </li>
              </>
              }
            </ul>
          </nav>
        </div>
      </aside>
    </div>
    )
}
