import Head from "next/head";
import Link from "next/link";

export default function wrapper({ children }) {
    return (
        <>
            <div>
                <div className="main-wrapper">
                    <div className="header">
                        <div className="header-left">
                            <a href="index.html" className="logo">
                                <img src="assets/img/logo.png" width={35} height={35} alt /> <span>Video Chat</span>
                            </a>
                        </div>
                        <a id="toggle_btn" href="javascript:void(0);"><i className="fa fa-bars" /></a>
                        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar"><i className="fa fa-bars" /></a>
                        <ul className="nav user-menu float-right">
                            <li className="nav-item dropdown d-none d-sm-block">
                                <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown"><i className="fa fa-bell-o" /> <span className="badge badge-pill bg-danger float-right">3</span></a>
                                <div className="dropdown-menu notifications">
                                    <div className="topnav-dropdown-header">
                                        <span>Notifications</span>
                                    </div>
                                    <div className="drop-scroll">
                                        <ul className="notification-list">
                                            <li className="notification-message">
                                                <a href="activities.html">
                                                    <div className="media">
                                                        <span className="avatar">
                                                            <img alt="John Doe" src="assets/img/user.jpg" className="img-fluid rounded-circle" />
                                                        </span>
                                                        <div className="media-body">
                                                            <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                            <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                    <div className="topnav-dropdown-footer">
                                        <a href="activities.html">View all Notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown d-none d-sm-block">
                                <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><i className="fa fa-comment-o" /> <span className="badge badge-pill bg-danger float-right">8</span></a>
                            </li>
                            <li className="nav-item dropdown has-arrow">
                                <a href="#" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
                                    <span className="user-img"><img className="rounded-circle" src="assets/img/user.jpg" width={40} alt="Admin" />
                                        <span className="status online" /></span>
                                    <span>Admin</span>
                                </a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" href="/profile">My Profile</Link>
                                    <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                                    <a className="dropdown-item" href="settings.html">Settings</a>
                                    <a className="dropdown-item" href="login.html">Logout</a>
                                </div>
                            </li>
                        </ul>
                        <div className="dropdown mobile-user-menu float-right">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="profile.html">My Profile</a>
                                <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                                <a className="dropdown-item" href="settings.html">Settings</a>
                                <a className="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar" id="sidebar">
                        <div className="sidebar-inner slimscroll">
                            <div id="sidebar-menu" className="sidebar-menu">
                                <ul>
                                    <li className="menu-title">Main</li>
                                    <li>
                                        <a href="index.html"><i className="fa fa-dashboard" /> <span>Dashboard</span></a>
                                    </li>

                                    <li className="submenu">
                                        <a href="#"><i className="fa fa-user" /> <span> Employees </span> <span className="menu-arrow" /></a>
                                        <ul style={{ display: 'none' }}>
                                            <li><a href="employees.html">Employees List</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="chat.html"><i className="fa fa-comments" /> <span>Chat</span> <span className="badge badge-pill bg-primary float-right">5</span></a>
                                    </li>

                                    <li>
                                        <a href="settings.html"><i className="fa fa-cog" /> <span>Settings</span></a>
                                    </li>

                                    <li className="menu-title">Extras</li>
                                    <li className="submenu">
                                        <a href="#"><i className="fa fa-columns" /> <span>Pages</span> <span className="menu-arrow" /></a>
                                        <ul style={{ display: 'none' }}>
                                            <li><a className="" href="blank-page.html"> Blank Page </a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="page-wrapper">
                        <div className="content">
                            {/* Page content */}
                            {children}
                            {/* End Page content */}
                        </div>

                        <div className="notification-box">
                            <div className="msg-sidebar notifications msg-noti">
                                <div className="topnav-dropdown-header">
                                    <span>Messages</span>
                                </div>
                                <div className="drop-scroll msg-list-scroll" id="msg_list">
                                    <ul className="list-box">
                                        <li>
                                            <a href="chat.html">
                                                <div className="list-item">
                                                    <div className="list-left">
                                                        <span className="avatar">R</span>
                                                    </div>
                                                    <div className="list-body">
                                                        <span className="message-author">Richard Miles </span>
                                                        <span className="message-time">12:28 AM</span>
                                                        <div className="clearfix" />
                                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <a href="chat.html">See all messages</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-overlay" data-reff />
            </div>

        </>
    )
}
