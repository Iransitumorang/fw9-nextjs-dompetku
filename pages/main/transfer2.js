import React from 'react';
import {Form, Button} from 'react-bootstrap'
import Link from 'next/link'
import DashboardLayout from '../main/dashboardLayout'

const Transfer2 = () => {
  return (
    <DashboardLayout>
        {/* <Navbar /> */}
        {/* <HambergerMenu /> */}
        <article>
            <aside>
                <div className="right-slide p-5">
                    <div className="mt-2 ms-3">
                        <h3 className="transfer-money">Transfer Money </h3>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <img src='' alt="Dashboard Dashboard"/>
                        </div>
                        <h3 className="type-amount ms-3 mb-5">Type the amount you want to transfer and then
                            <br/> press continue to the next steps.
                        </h3>
                        
                    <div className='d-flex flex-column gap-5' >
                    <Form className='text-center' >
                <Form.Control type="number" name="amount" className="form-control form-border me-5 amount-value d-inline" placeholder="0.00"/>
                <h3 className="seratus20">Rp120.000 Available </h3>

                <Form.Group className="form-list mb-5 parent-input w-50">
                    <div className="input-group flex-nowrap mt-5 mb-3 border-i">
                        <span className="input-group-text form-border2">
                            <img src='' alt="notes"/>
                       </span>
                        <Form.Control type="text" name="notes" className="form-control form-border w-100 me-5" placeholder="For buying some socks" />
                    </div>
                </Form.Group>
            </Form>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link href="/StatusSuccess">
                    <Button variant="success" className="px-4 me-3 mt-5 continue" type="button" style={{fontWeight: "700", fontSize: "18px", lineHeight: "25px"}}>Continue
                    </Button>
                </Link>
            </div>
                    </div>
                    </div>
                </div>
            </aside>
        </article>
    </DashboardLayout>
  )
}

export default Transfer2