import React from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useSatoshi from "../../hooks/useSatoshi";
import user1 from "../../images/user1.png";



const User = () => {

    const {users} = useSatoshi()

    return (
        <div className="mt-4">
            <div className="d-flex align-items-center justify-content-between">
                    <div className="searchForm">
                        <input type="text" className="form-control" placeholder="Search user by login, email or name" />
                    </div>
                <div className="user">
                    <div className="text-end d-flex justify-content-end">
                        <button type="button" className="btn-control">
                            Invite Users
                        </button>
                    </div>
                </div>
            </div>

            <div className="configurationTable table-responsive">
                <Table striped hover className="mt-4">
                    <thead>
                        <tr>
                            <th className="text-nowrap">User</th>
                            <th className="text-nowrap">Email</th>
                            <th className="text-nowrap">Username</th>
                            <th className="text-nowrap">Seen</th>
                            <th className="text-nowrap">Role</th>
                            <th className="text-center text-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex align-items-center gap-2 text-nowrap">
                                <img src={user1} alt="" /> <span>Mbah Jacob</span>
                            </td>
                            <td className="text-nowrap">nathan.roberts@example.com</td>
                            <td className="text-nowrap">@carolfernandes</td>
                            <td className="text-nowrap">15 minutes ago</td>
                            <td className="text-nowrap">Admin</td>
                            <td className="text-center text-nowrap">
                                <NavLink to="#" className="text-end ms-auto">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z" fill="#6B6E78" />
                                        <path d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="#6B6E78" />
                                        <path d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z" fill="#6B6E78" />
                                    </svg>
                                </NavLink>
                            </td>
                        </tr>
                        {
                            users.map(item => (
                                <tr>
                                    <td className="d-flex align-items-center gap-2 text-nowrap">
                                        <img src={user1} alt="" /> <span>{item?.clientname}</span>
                                    </td>
                                    <td className="text-nowrap">{item?.clientname}</td>
                                    <td className="text-nowrap">{item?.clientname}</td>
                                    <td className="text-nowrap">{item?.minoractive ? "Active" : "Inactive"}</td>
                                    <td className="text-nowrap">User</td>
                                    <td className="text-center text-nowrap">
                                        <NavLink to="/" className="text-end ms-auto">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10Z" fill="#6B6E78" />
                                                <path d="M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="#6B6E78" />
                                                <path d="M16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z" fill="#6B6E78" />
                                            </svg>
                                        </NavLink>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default User;
