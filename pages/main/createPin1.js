import Link from 'next/link';
import React from 'react';
import { Button } from 'react-bootstrap';
import DashboardStart from './dashboardStart'

function CreatePin1() {
  return (
   <DashboardStart>
    <aside className="d-flex flex-column justify-content-center gap-2 px-5">
            <h3 className="Secure-cp1">Secure Your Account, Your Wallet, <br/> and Your Data With 6 Digits PIN <br/> That You
                Created Yourself.</h3>
            <h6 className="Create-digits-cp1">Create 6 digits pin to secure all your money and your data in <br/> Zwallet
                app.Keep it secret and don’t tell anyone about your <br/> Zwallet account password and the PIN.</h6>
            <div className="auth-form-wrapper py-5">
                <div className="d-flex gap-4 flex-row pin-input-wrapper">
                    <div className="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div className="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div className="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div className="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div className="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                    <div className="d-flex align-items-center form-create-pin">
                        <input maxlength="1" min="0" max="9" type="number"/>
                    </div>
                </div>
            </div>
            <div>
                <Link href=''>
                    <a className="d-grid cp1-btn-confirm">
                        <Button type="button" variant="success">Confirm</Button>
                    </a>
                </Link>
            </div>
        </aside>
   </DashboardStart>
  )
}

export default CreatePin1