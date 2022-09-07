// import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import transaction from '../public/transaction.png';

function SidebarStart() {
  return (
    <>
    <article className=" right-slide-login pb-5 row min-vh-100">
        <Link href="#">
            <a>
            <p class="fs-2 fw-bold link-success ms-5 mt-3" style={{letterSpacing: '2px'}}>Dompetku</p>
            </a> 
        </Link>
        <div className="d-flex flex-column align-items-center">
            <div>
                <Image src={transaction} alt="transaction" className="img-fluid"/>
            </div>
            <div>
                <h3 className="covering">App that Covering Banking Needs.</h3>
                <h5 className="dompetku">Dompetku is an application that focussing in banking needs for all users
                    <br/> in the world. Always updated and always following world trends.<br/> 5000+ users
                    registered in Zwallet everyday with worldwide <br/> users coverage.</h5>
            </div>
        </div>
    </article>
    </>
  )
}

export default SidebarStart