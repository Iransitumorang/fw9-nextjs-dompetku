import React from 'react'

function DashboardLayout(props) {
  return (
    <>
        <div>Navbar Components</div>
        <div>aside Components</div>
        <main>{props.children}</main>
        <div>footer Components</div>
    </>
  )
}

export default DashboardLayout  