import React from 'react';
import { Button } from 'react-bootstrap';
import DashboardStart from './dashboardStart'
import success from '../../public/success.png'
import Image from 'next/image'
import Link from 'next/link';

function CreatePin() {
  return (
   <DashboardStart>
    {/* <Sidebar /> */}
    <aside className="d-flex flex-column justify-content-center gap-2 px-5">
                <div className="mb-5">
                    <Image src={success} alt="Successfully"/>
                </div>
                <h3 className="start-acc mt-2 mb-5">Your PIN Was Successfully Created</h3>
                <h6 className="transfering">Your PIN was successfully created and you can now access <br/> all the features
                    in Zwallet. Login to your new account and <br/> start exploring!</h6>

                <Link href='#'>
                    <a className="d-grid mt-5 login-now">
                        <Button type="button" variant="success">Login Now</Button>
                    </a>
                </Link>
    </aside>
   </DashboardStart>
  )
}

export default CreatePin