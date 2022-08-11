import React from 'react';
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'

function signup() {
  return (
      <div className='d-flex'>
        {/* <Sidebar /> */}
        <aside className="col-12 col-md-5 d-flex flex-column justify-content-center gap-2 px-5">
                <h3 className="start-acc">Start Accessing Banking Needs <br/> With All Devices and All Platforms <br/>
                    With 30.000+ Users</h3>
                <h6 className="transfering">Transfering money is eassier than ever, you can access <br/> Zwallet wherever you
                    are. Desktop, laptop, mobile phone? <br/> we cover all of that for you!</h6>
                
                <div className='d-flex flex-column gap-5' >
                <Form className="form-list mb-5">
                    <Form.Group className="input-group flex-nowrap mb-3 mt-5">
                        <span className="input-group-text form-border2" style={{marginLeft: "-5px"}}>
                            <img src='' alt="user" />
                        </span>
                        <Form.Control type="text" name="fullName" className="form-control form-border w-100 me-2" placeholder="Jonathan Mandel"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mt-5 mb-5">
                        <span className="input-group-text form-border2">
                            <img src='' alt="mail" />
                        </span>
                        <Form.Control type="email" name="email" className="form-control form-border w-100 me-2" placeholder="pewdiepie1@gmail.com"/>
                    </Form.Group>
                    <Form.Group className="input-group flex-nowrap mb-3">
                        <span className="input-group-text form-border2">
                            <img src='' alt="lock" />
                        </span>
                        <Form.Control type="password" name="password" className="form-control form-border w-100 me-2" placeholder="Create your password"/>
                    </Form.Group>
                <div className='underlines'>
                    <Link href="/Home" className="d-grid btn-signup mt-5">
                        <Button type="button" variant="success">Sign Up</Button>
                    </Link>
                </div>
                <h3 className="signup">Already have an account? Let’s <Link href="/Login">Log in</Link>
                </h3>
            </Form>
                </div>
            </aside>
    </div>
  )
}

export default signup