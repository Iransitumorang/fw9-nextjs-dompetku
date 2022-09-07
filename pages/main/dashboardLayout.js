import React from 'react'
import HeaderDashboard from '../../components/headerDashboard'
import FooterDashboard from '../../components/footerDashboard'
import Navbar from '../../components/navbar'

function DashboardLayout(props) {
  return (
    <>
        <HeaderDashboard />
        <div className='d-flex col-md-12'>
          <Navbar className="col-md-3"/>
          <main className='col-md-8'>{props.children}</main>
        </div>
        <FooterDashboard />
    </>
  )
}

export default DashboardLayout  