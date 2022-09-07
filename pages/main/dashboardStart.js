import React from 'react'
import SidebarStart from '../../components/sidebarStart'

function DashboardStart(props) {
  return (
    <>
        <div className='d-flex col-md-12'>
          <SidebarStart className="col-md-6"/>
          <main className='col-md-6 m-auto'>{props.children}</main>
        </div>
    </>
  )
}

export default DashboardStart  