import React from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link'
import DashboardLayout from '../main/dashboardLayout'

const Confirmation = () => {
  return (
        <DashboardLayout>
                {/* <Navbar />
                <HambergerMenu /> */}

                <article>
                    <div className="right-slide p-md-5">
                        <div className="mt-2 ms-3">
                            <h3 className="transfer">Transfer To
                            </h3>
                        </div>

                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column">
                                <img src='' alt="Dashboard Dashboard"/>
                            </div>
                            <h3 className="details ms-4">Details</h3>
                            <div className='d-flex flex-column gap-3 ms-4 confirm-detail-head'>
                                <div className='d-flex flex-column confirm-detail p-3'>
                                    <span className='primary'>Amount</span>
                                    <span className='number-phone'>Rp 100.000</span>
                                </div>
                                <div className='d-flex flex-column confirm-detail p-3'>
                                    <span className='primary'>Balance Left</span>
                                    <span className='number-phone'>Rp 20.000</span>
                                </div>
                                <div className='d-flex flex-column confirm-detail p-3'>
                                    <span className='primary'>Date & Time</span>
                                    <span className='number-phone'>May 11, 2020 - 12.20</span>
                                </div>
                                <div className='d-flex flex-column confirm-detail p-3'>
                                    <span className='primary'>Notes</span>
                                    <span className='number-phone'>For buying some socks</span>
                                </div>
                            </div>
                        </div>
                        <Link href='' className="d-flex justify-content-end">
                            <Button variant="success" className="px-4 mt-5 me-3 transfer">Continue</Button>
                        </Link>
                    </div>
                </article>
        </DashboardLayout>
  )
}

export default Confirmation