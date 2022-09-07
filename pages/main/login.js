import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai';
import { FiLock } from 'react-icons/fi';
import DashboardStart from './dashboardStart';

const Login = () => {
  return (
    <DashboardStart>
        <div className='d-flex my-auto'>
            <aside className="d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc container-md-fluid">Start Accessing Banking Needs <br/> With All Devices and All Platforms
                    <br/> With
                    30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>

                <div className='d-flex flex-column gap-5' >
                <Form>
            <div className="input-group flex-nowrap mt-5 mb-5 d-flex" controlId="formBasicEmail">
                <div className="input-group-text form-border2">
                    <AiOutlineMail />
                </div>
                <input name="email" type="email" className="form-control form-border w-100 me-2" placeholder="Pewdiepie1@gmail.com" />
            </div>

            <div className="input-group flex-nowrap" controlId="formBasicPassword">
                <div className="input-group-text form-border2">
                    <FiLock />
                </div>
                <input name="password" type="password" className="form-control form-border w-100 me-2" placeholder="Enter your password" />
            </div>

                <div className="text-end password mt-2">
                    <Link href="/main/resetPassword"><a>Forgot Password?</a></Link>
                </div>
                <h3 className="invalid mt-3">Email or Password Invalid</h3>
                <Link href="/main/home">
                    <a className="d-grid btn-login underlines">
                        <Button type="submit" variant="success" >Login</Button>
                    </a>
                </Link>
                <div className="signup">Don’t have an account? Let’s <Link href="/main/signup"><a>Sign Up</a></Link></div>
        </Form>
                </div>
            </aside>
        </div>
          </DashboardStart>
  )
}

export default Login