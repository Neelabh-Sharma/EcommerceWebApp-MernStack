import React, { useState } from 'react'
import Header from '../components/Header'
import { FaEdit } from 'react-icons/fa'

function Profile() {
  const [user,setuser] = useState({
    "Name" : "User",
    "email" : "user@gmail.com",
    "password":"userpassword",
    "OrderComplete" : 23,
    "pendingOrder" : 4,
  })
  return (
    <div>
      <Header/>
      <section >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="img-fluid my-5"  />
                    <h5 className='text-dark'>{user.Name}</h5>
                    <FaEdit className='text-dark fs-4'/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4"/>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">{user.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Password</h6>
                          <p className="text-muted">{user.password}</p>
                        </div>
                      </div>
                      <h6>Order History</h6>
                      <hr className="mt-0 mb-4"/>
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Order shipped</h6>
                          <p className="text-muted">{user.OrderComplete}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Pending</h6>
                          <p className="text-muted">{user.pendingOrder}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile