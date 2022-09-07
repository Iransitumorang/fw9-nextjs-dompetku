import React from 'react';
import Image from "next/image"
import DashboardLayout from '../main/dashboardLayout'

const PersonalInfo = () => {
  return (
        <DashboardLayout>
                {/* <Navbar /> */}
                {/* <HambergerMenu /> */}
                <aside>
                    <div className="right-slide p-md-5">
                        <div className="mt-2 ms-3">
                            <h3 className="personal-info">Personal Information</h3>
                            <h3 className="wegot-personal">We got your personal information from the sign <br/> up proccess. If you want
                                to make changes on <br/> your information, contact our support.</h3>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column">
                                <Image src='' className="img-fluid" alt='personal info' />
                                <Image src='' className="img-fluid" alt='personal info' />
                                <Image src='' className="img-fluid" alt='personal info' />
                                <Image src='' className="img-fluid" alt='personal info' />
                            </div>
                        </div>
                    </div>
                </aside>
        </DashboardLayout>
  )
}

export default PersonalInfo