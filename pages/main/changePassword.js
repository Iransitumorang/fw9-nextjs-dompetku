import React from 'react';
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import DashboardLayout from '../main/dashboardLayout'
import Image from 'next/image'

const ChangePassword = () => {
  return (
        <DashboardLayout>
                {/* <Navbar />
                <HambergerMenu /> */}
                <article>
                    <aside>
                        <div className=" p-5">
                            <div className="mt-2 ms-3 mb-5">
                                <h3 className="start-acc">Change Password
                                </h3>
                                <h3 className="transfering">You must enter your current password and then <br/> type your new password twice.
                                </h3>
                            </div>
                        </div>
                    </aside>

                <div className='d-flex flex-column gap-5' >
                <Form className="d-flex flex-column align-items-center gap-3 px-5">
                    <Form.Group className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                        <Image src='' className="img-fluid" alt='lock' />
                        </span>
                        <Form.Control type="password" name="password" className="form-control form-border w-100 me-2" placeholder="Current password"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                            <Image src='' className="img-fluid" alt='lock' />
                        </span>
                        <Form.Control type="password" className="form-control form-border w-100 me-2" placeholder="New password" name="password2"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                            <Image src='' className="img-fluid" alt='lock' />
                        </span>
                        <Form.Control type="password" className="form-control form-border w-100 me-2" placeholder="Repeat New password" name="password3"/>
                    </Form.Group>

                    <Link href={'#'} className="input-group flex-nowrap mb-3 mt-3 d-grid"> <a>
                        <Button variant="success" className="mb-5 btn-change-password" type="button">Change Password
                        </Button>
                        </a></Link>
                </Form>
                    </div>
            </article>
        </DashboardLayout>
  )
}

export default ChangePassword