import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import DashboardStart from './dashboardStart';
import { AiOutlineMail } from 'react-icons/ai';

function ResetPassword() {
  return (
    <DashboardStart>
        {/* <Sidebar /> */}
          <aside className=" d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="forgot-pass">Did You Forgot Your Password? <br/> Don’t Worry, You Can Reset Your <br/> Password In a Minutes. </h3>
                <h6 className="reset-your-pass">To reset your password, you must type your e-mail and we <br/> will send a link to your email and you will be directed to the <br/> reset password screens.</h6>
    
                <div className='d-flex flex-column gap-5' >
                <Form className="form-list mb-5">
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <AiOutlineMail />
                        </span>
                        <Form.Control type="email" name="email" className="form-control form-border w-100 me-2" placeholder="pewdiepie1@gmail.com"/>
                    </Form.Group>
                    <div className='underlines d-grid rp-btn-confirm'>
                        <Link href="/main/resetPassword2" className="d-grid btn-login">
                            <Button type="button" variant="success">Confirm</Button>
                        </Link>
                    </div>
                </Form>
                </div>
            </aside>
    </DashboardStart>
  )
}

export default ResetPassword