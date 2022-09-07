import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link'
import Image from 'next/image'
import DashboardLayout from './dashboardLayout'
import { AiOutlineArrowRight } from 'react-icons/ai';

import jekeen from '../../public/jessica-keen.png'

const Profile2 = () => {
  return (
    <div>
        <DashboardLayout >
            <article>
            <aside>
                <div className="right-slide p-md-5">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-center  mt-2">
                            <Image src={jekeen} className="robert-head img-fluid" alt="robert-head" style={{alignSelf: "center", width: "2%", marginRight: "5px"}}/>
                        </div>
                        <span className="text-center my-3" style={{fontWeight: "400", fontSize: "16px", color: "#7A7886"}}>Edit</span>
                        <span className="text-center my-3" style={{fontWeight: "700", fontSize: "24px",lineHeight: "26px", color: "#4D4B57"}}>Robert Chandler</span>
                        <span className="text-center">+62 813-9387-7946</span>
                    </div>
                    <div className="d-flex flex-column text-center gap-4 mt-5 aside-value2">
                        <div className='profileMain mx-auto'>
                            <Link href="/PersonalInfo">
                                <a className='d-flex justify-content-between align-items-center linkProfile'>
                                    <sapn>Personal Information</sapn>
                                    <AiOutlineArrowRight />
                                </a>
                            </Link>
                        </div>
                        <div className='profileMain mx-auto'>
                        <Link href="/ChangePassword">
                            <a className='d-flex justify-content-between linkProfile'>
                                <span>Change Password</span>
                                <AiOutlineArrowRight />
                            </a>
                        </Link>
                        </div>
                        <div className='profileMain mx-auto'>
                        <Link href="/ChangePin">
                            <a className='d-flex justify-content-between linkProfile'>
                                <span>Change PIN</span>
                                <AiOutlineArrowRight />
                            </a>
                        </Link>
                        </div>
                        <div className='profileMain mx-auto'>
                        <Link href="/Home">
                            <a className='d-flex justify-content-between linkProfile'>
                                <span>Logout</span>
                            </a>
                        </Link>
                        </div>
                    </div>
                </div>
            </aside>
            </article>
      </DashboardLayout>
    </div>
  )
}

export default Profile2;