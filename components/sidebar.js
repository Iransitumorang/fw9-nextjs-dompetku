// import React from 'react';
import Link from 'next/link'

function sidebar() {
  return (
    <>
    <article className="col-12 col-md-7 right-slide-login mb-3 row min-vh-100">
        <Link href="/">
            <img src='../public/images/dompetku2.png' alt="logo brand" className="w-25 mt-3 ms-5 img-fluid"/>
            </Link>
        <div className="d-flex flex-column align-items-center">
            <div>
                <img src='../public/images/dompetku2.png' alt="transaction" className="img-fluid"/>
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

export default sidebar