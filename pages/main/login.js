import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import DashboardLayout from '../main/dashboard'

export default function login() {
  return (
    <DashboardLayout>
        <div className='d-flex'>
            {/* <Sidebar /> */}
            <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc container-md-fluid">Start Accessing Banking Needs <br/> With All Devices and All Platforms
                    <br/> With
                    30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>

                <div className='d-flex flex-column gap-5' >
                    <Form>
                        <Form.Group className="input-group flex-nowrap mt-5 mb-5 d-flex" controlId="formBasicEmail">
                            <div className="input-group-text form-border2">
                                <AiOutlineMail />
                            </div>
                            <Form.Control name="email" type="email" className="form-control form-border w-100 me-2" placeholder="Pewdiepie1@gmail.com" />
                        </Form.Group>

                        <Form.Group className="input-group flex-nowrap" controlId="formBasicPassword">
                            <div className="input-group-text form-border2">
                                <FiLock />
                            </div>
                            <Form.Control name="password" type="password" className="form-control form-border w-100 me-2" placeholder="Enter your password"/>
                        </Form.Group>

                        <div className="text-end password mt-2">
                            <Link href="/ResetPassword">Forgot Password?</Link>
                        </div>
                        <h3 className="invalid mt-3">Email or Password Invalid</h3>
                        <Link href="/Home" className="d-grid btn-login underlines">
                            <Button type="submit" variant="success" onClick={() => loginWithRedirect()}>Login</Button>
                        </Link>
                        <h3 className="signup">Don’t have an account? Let’s <Link href="/Signup">Sign Up</Link></h3>
                    </Form>
                </div>
            </aside>
        </div>
    </DashboardLayout>
  )
}
