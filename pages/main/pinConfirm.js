// import React from 'react';
// import Link from 'next/link'
import {Button} from 'react-bootstrap'
import Image from "next/image"
import DashboardLayout from '../main/dashboardLayout'

function PinConfirm () {
  return (
        <DashboardLayout>
                {/* <Navbar />
                <HambergerMenu /> */}
                <article className=" ms-5">
                <div className="right-slide p-md-5">
                    <div className="mt-2 ms-3">
                        <h3 className="transfer-to">Transfer To </h3>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column">
                            <Image src='' alt="Dashboard Dashboard"/>
                        </div>
                        <h3 className="details">Details </h3>
                        <Image src='' alt='Details'/>
                        <Image src='' alt='Details'/>
                        <Image src='' alt='Details'/>
                        <Image src='' alt='Details'/>
                    </div>

                    <div style={{textAlign: "End"}}>
                        <Button variant="success" className='modal-continue' >
                            Continue
                        </Button>

                        {/* <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="modal-title enter-pin ms-3 mt-4">Enter PIN to Transfer</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="enter-your ms-3">Enter your 6 digits PIN for confirmation to <br/> continue transferring money. </Modal.Body>
                            <Modal.Body>
                                <div className="auth-form-wrapper py-md-5 d-flex">
                                    <div className="d-flex gap-4 flex-row pin-input-wrapper">
                                        <div className="d-flex align-items-center modal-value">
                                            <input maxlength="1" min="0" max="9" type="number"/>
                                        </div>
                                        <div className="d-flex align-items-center modal-value">
                                            <input maxlength="1" min="0" max="9" type="number"/>
                                        </div>
                                        <div className="d-flex align-items-center modal-value">
                                            <input maxlength="1" min="0" max="9" type="number"/>
                                        </div>
                                        <div className="d-flex align-items-center modal-value">
                                            <input maxlength="1" min="0" max="9" type="number"/>
                                        </div>
                                        <div className="d-flex align-items-center modal-value">
                                            <input maxlength="1" min="0" max="9" type="number"/>
                                        </div>
                                        <div className="d-flex align-items-center modal-value">
                                            <input maxlength="1" min="0" max="9" type="number"/>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Link to="/StatusSuccess">
                                    <Button variant="success" className="modal-btn-continue mb-4" onClick={handleClose}>
                                        Continue
                                    </Button>
                                </Link>
                            </Modal.Footer>
                        </Modal> */}
                    </div>
                </div>
                </article>
        </DashboardLayout>
  )
}

export default PinConfirm