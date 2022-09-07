import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import dashboard from '../public/dashboard.png'
import transfer from '../public/transfer.png'
import topup from '../public/topup.png'
import profile from '../public/profile.png'
import logout from '../public/logout.png'

function Navbar() {
  return (
        <div className='col-md-3 ms-5 p-5 p-md-5 me-5 nav-satu'>
          <div className='d-flex flex-column parent-div'>
            <div className='nav flex-fill flex-column'>
              <Link href='/'><a className='nav-link dashboard mb-3 fw-bold text-dark'>
                <Image src={dashboard} width={17} height={11} className='pe-1' alt='Dashboard'/> Dashboard
                </a></Link>
              <Link href='/main/transfer1'><a className='nav-link transfer-nav mb-3 fw-bold text-dark'>
                <Image src={transfer} width={17} height={13} className='' alt='Transfer'/> Transfer
                </a></Link>
              <Link href='/main/topup'><a className='nav-link topup mb-3 fw-bold text-dark'>
                <Image src={topup} width={17} height={13} className='' alt='Top Up'/>  Top Up
                </a></Link>
              <Link href='/main/profile1'><a className='nav-link profil-nav fw-bold text-dark'>
                <Image src={profile} width={20} height={17} className='' alt='profile'/> Profile
                </a></Link>
            </div>

            <div className='ms-2 fw-bold'>
              <Link href='/main/login'><a className='nav-link logout-nav ps-3'>
                <Image src={logout} width={15} height={13} className='' alt='Logout' /> Logout
                </a></Link>
            </div>
          </div>
        </div>
  )
}

export default Navbar