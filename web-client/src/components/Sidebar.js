import React, { Component } from 'react';

import Logo from "../assets/logo.png";

export default class Sidebar extends Component {
  render() {
    return (
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
                <a href="#" className="nav-link active">
                  <i className="fas fa-building nav-icon"></i>
                  <p>
                    Thiết lập 
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Chung</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Chi tiết
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>D3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>D5</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="nav-header">QUẢN LÝ SỬ DỤNG PHÒNG</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-building-user nav-icon"/>
                  <p>
                    Tình trạng phòng 
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Chung</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Chi tiết
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>D3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>D5</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-search" />
                      <p>Tìm kiếm</p>
                    </a>
                  </li>                  
                </ul>                
              </li>

              <li className="nav-item">
                <a href="/service-schedule" className="nav-link">
                <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Thiết lập lịch
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
              </li>
              
              <li className="nav-item">
                <a href="#" className="nav-link">
                <i className="nav-icon far fa-envelope" />
                  <p>
                    Đơn đăng ký
                    <i className="fas fa-angle-left right" />
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Đang chờ duyệt
                      <span className="badge badge-info right">2</span>
                      </p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Đã duyệt</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-header">QUẢN LÝ NGƯỜI DÙNG</li>

              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                <i class="fa-solid fa-users nav-icon" style={{fontSize: '14px'}}></i>
                  <p>
                    Danh sách người dùng
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                <i class="fa-solid fa-user-plus nav-icon" style={{fontSize: '14px'}}></i>
                  <p>
                    Thêm người dùng
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    )
  }
}
