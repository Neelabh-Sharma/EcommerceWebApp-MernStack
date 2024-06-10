import React from 'react'
import { FaBars, FaBoxOpen, FaCartPlus, FaChartArea, FaDashcube, FaFacebookMessenger, FaMoneyBill, FaProductHunt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";

function DashSidbar() {
  return (
    <React.Fragment>
        <div className='container'>
                <div className='vh-100 shadow p-3 mb-5 rounded'>
                        <div className='h-100 w-100 d-flex flex-column mb-3'>
                                <div className='mt-4'>
                                    <ul className='navbar-nav'>
                                        <li className='nav-item fs-4 fw-bolder'>
                                                Dashboard
                                        </li>
                                        <li className='nav-item fs-5 text-center'>
                                            <Link to='/dashboard' className=' nav-link bg-primary text-white'>
                                              <MdDashboard className='me-2' />
                                              Dashboard
                                            </Link>
                                        </li>
                                        <li className='nav-item fs-5 text-center '>
                                            <Link to='/dashboard'className=' nav-link'>
                                               <FaCartPlus className='me-2'/>
                                               Products
                                            </Link>
                                        </li>
                                        <li className='nav-item fs-5 text-center '>
                                            <Link to='/dashboard'className=' nav-link'>
                                               <FaUser className='me-2'/> Users
                                            </Link>
                                        </li>
                                        <li className='nav-item fs-5 text-center '>
                                            <Link to='/dashboard'className=' nav-link'>
                                                <FaFacebookMessenger className='me-2'/> Messages
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='mt-4'>
                                    <ul className='navbar-nav'>
                                        <li className='nav-item fs-4 fw-bolder'>
                                            Features
                                        </li>
                                        <li className='nav-item fs-5 text-center '>
                                            <Link to='/dashboard'className=' nav-link'>
                                                <FaBars/> Bars
                                            </Link>
                                        </li>
                                        <li className='nav-item fs-5 text-center'>
                                            <Link to='/dashboard'className=' nav-link'>
                                               <FaChartArea/> Chart
                                            </Link>
                                        </li>
                                        <li className='nav-item fs-5 text-center '>
                                            <Link to='/dashboard'className=' nav-link'>
                                              <FaBoxOpen/>Coupon
                                            </Link>
                                        </li>
                                        <li className='nav-item fs-5 text-center '>
                                            <Link to='/dashboard'className=' nav-link'>
                                                <FaMoneyBill/> Transaction
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                </div>
        </div>
    </React.Fragment>
  )
}

export default DashSidbar