import React from 'react';
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import DashboardStart from './dashboardStart'
// import Image from 'next/image'
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';

function signup() {
  return (
      <DashboardStart>
        <aside className="d-flex flex-column gap-2 px-5 my-auto">
                <h3 className="start-acc">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/>
                    With 30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                
                <div className='d-flex flex-column gap-4' >
                <Form className="form-list mb-5">
                    <Form.Group className="input-group flex-nowrap mb-3 mt-5">
                        <span className="input-group-text form-border2" style={{marginLeft: "1px"}}>
                            <AiOutlineUser />
                        </span>
                        <Form.Control type="text" name="fullName" className="form-control form-border w-100 me-2" placeholder="Enter your firstname"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mb-3 mt-5">
                        <span className="input-group-text form-border2" style={{marginLeft: "1px"}}>
                            <AiOutlineUser />
                        </span>
                        <Form.Control type="text" name="fullName" className="form-control form-border w-100 me-2" placeholder="Enter your lastname"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <AiOutlineMail />
                        </span>
                        <Form.Control type="email" name="email" className="form-control form-border w-75 me-2" placeholder="Enter your e-mail"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                            <BiLockAlt />
                        </span>
                        <Form.Control type="password" name="password" className="form-control form-border w-100 me-2" placeholder="Create your password"/>
                    </Form.Group>
                <div className='underlines'>
                    <Link href="/Home">
                        <a className="d-grid btn-signup mt-5">
                        <Button type="button" variant="success">Sign Up</Button>
                        </a>
                        </Link>
                </div>
                <h3 className="signup">Already have an account? Let’s <Link href="/Login">
                    <a>Log in</a>
                </Link>
                </h3>
            </Form>
                </div>
            </aside>
    </DashboardStart>
  )
}

export default signup