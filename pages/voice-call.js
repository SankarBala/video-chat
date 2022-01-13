import Head from 'next/head';
import ChattingLayout from '../layouts/chattingLayout';
export default function voiceCall() {

    return (
        <>
            <ChattingLayout>
                <div className="chat-window">
                    <div className="fixed-header">
                        <div className="navbar">
                            <div className="user-details mr-auto">
                                <div className="float-left user-img m-r-10">
                                    <a href="profile.html" title="Jennifer Robinson"><img src="assets/img/user.jpg" alt className="w-40 rounded-circle" /><span className="status online" /></a>
                                </div>
                                <div className="user-info float-left">
                                    <a href="profile.html" title="Jennifer Robinson"><span className="font-bold">Jennifer Robinson</span></a>
                                    <span className="last-seen">Online</span>
                                </div>
                            </div>
                            <ul className="nav float-right custom-menu">
                                <li className="nav-item">
                                    <a className="task-chat profile-rightbar float-right" href="#chat_sidebar" id="task_chat"><i aria-hidden="true" className="fa fa-comments" /></a>
                                </li>
                                <li className="nav-item dropdown dropdown-action">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog" /></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="javascript:void(0)" className="dropdown-item">Settings</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-contents">
                        <div className="chat-content-wrap">
                            <div className="voice-call-avatar">
                                <img src="assets/img/doctor-03.jpg" alt className="call-avatar" />
                                <span className="username">Cristina Groves</span>
                                <span className="call-timing-count">01:23</span>
                            </div>
                            <div className="call-users">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/user-04.jpg" className="img-fluid" alt />
                                            <span className="call-mute"><i className="fa fa-microphone-slash" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/patient-thumb-02.jpg" className="img-fluid" alt />
                                            <span className="call-mute"><i className="fa fa-microphone-slash" /></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="assets/img/patient-thumb-01.jpg" className="img-fluid" alt />
                                            <span className="call-mute"><i className="fa fa-microphone-slash" /></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="chat-footer">
                        <div className="call-icons">
                            <ul className="call-items">
                                <li className="call-item">
                                    <a href="#" title="Enable Video" data-placement="top" data-toggle="tooltip">
                                        <i className="fa fa-video-camera camera" />
                                    </a>
                                </li>
                                <li className="call-item">
                                    <a href="#" title="Mute" data-placement="top" data-toggle="tooltip">
                                        <i className="fa fa-microphone microphone" />
                                    </a>
                                </li>
                                <li className="call-item">
                                    <a href="#" title="Add User" data-placement="top" data-toggle="tooltip">
                                        <i className="fa fa-user-plus" />
                                    </a>
                                </li>
                            </ul>
                            <div className="end-call">
                                <a href="javascript:void(0);">End Call</a>
                            </div>
                        </div>
                    </div>
                </div>
            </ChattingLayout>
        </>
    )
}