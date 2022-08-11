import React from 'react';
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'

const ChangePin = () => {
  return (
    <div>
        {/* <HeaderDashboard /> */}
        <div className='d-flex'>
            {/* <Navbar />
            <HambergerMenu /> */}
            <article className="col-12 col-md-8 ">
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2 ms-3 mb-5">
                        <h3 className="start-acc">Change Pin
                        </h3>
                        <h3 className="transfering">Enter your current 6 digits Zwallet PIN below to <br/> continue to the next
                            steps.
                        </h3>
                    </div>

                    <div className='d-flex flex-column gap-5' >
                    <Form className="auth-form-wrapper py-5 d-flex justify-content-center">
            <Form.Group className="d-flex gap-4 flex-row pin-input-wrapper" style={{marginLeft: "auto"}}>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
                <div className="d-flex align-items-center value">
                    <Form.Control maxlength="1" min="0" max="9" type="number"/>
                </div>
            </Form.Group>
        </Form>
        <Link href="/ChangePin2" className="d-flex justify-content-center">
            <Button type="button" variant="success" className="change-pin2 btn-change-password">Change PIN</Button>
        </Link>
                </div>
                </div>
            </aside>
        </article>
        </div>
        {/* <FooterDashboard /> */}
    </div>
  )
}

export default ChangePin