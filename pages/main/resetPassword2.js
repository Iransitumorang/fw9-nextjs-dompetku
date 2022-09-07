import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link'
import DashboardStart from './dashboardStart'
  
function ResetPassword() {
  return (
    <DashboardStart >
        {/* <Sidebar /> */}
        <aside className="d-flex flex-column justify-content-center gap-2 px-5">
            <h3 className="start-acc">Did You Forgot Your Password? <br/> Don’t Worry, You Can Reset Your <br/> Password In a Minutes.
            </h3>
                <h6 className="transfering">To reset your password, you must type your e-mail and we <br/> will send a link
                    to your email and you will be directed to the <br/> reset password screens.</h6> 

                <div className='d-flex flex-column gap-5' >
                <Form className="form-list mb-5">
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src='' alt="lock"/>
                        </span>
                        <Form.Control type="password" name="password" className="form-control form-border w-100 me-2" placeholder="Input your new password"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src='' alt="lock"/>
                        </span>
                        <Form.Control type="password" className="form-control form-border w-100 me-2" name="password2" 
                            placeholder="Re-Input your new password"/>
                    </Form.Group>
                <div className='underlines'>
                    <Link href="/Login" className="d-grid rp-btn-confirm">
                        <Button type="button" variant="success">Reset Password</Button>
                    </Link>
                </div>
            </Form>
                </div>
        </aside>
    </DashboardStart>
  )
}

export default ResetPassword