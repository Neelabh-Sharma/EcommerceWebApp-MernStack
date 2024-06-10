import React from 'react'
import DashSidbar from './Admin-control/Admin-Component/Dash-Sidbar'

function Dashboard() {
  return (
    <React.Fragment>
      <div className='container-fluid vh-100 vw-100 overflow-y-hidden'>
        <div className='row'>
           <div className='col-3 '>
              <DashSidbar/>
           </div>
           <div className='col-9'>
             main
           </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard