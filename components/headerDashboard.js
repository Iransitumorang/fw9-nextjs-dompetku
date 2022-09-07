// import React from 'react';
import Link from 'next/link'
import Image from "next/image"
import dompetku from '../public/dompetku.png'
import dompetku2 from '../public/dompetku2.png'
import robert from '../public/robert-head.png'
import { AiOutlineBell } from 'react-icons/ai';

function HeaderDashboard() {
  return (
    <header className="header-dashboard d-md-flex justify-content-between d-none mb-5 pe-3 py-2">
        <div className="container-fluid d-flex justify-content-between">
          <div className='d-flex gap-2 mx-5 my-auto'>
            <Link href="/">
              <a>
                <Image src={dompetku} width={40} height={40} className="img-fluid" style={{maxWidth: "75%"}} alt="Logo"/>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Image src={dompetku2} width={150} height={40} className="img-fluid" style={{maxWidth: "75%"}} alt="Logo"/>
              </a>
            </Link>
          </div>
            {/* <Image src={right} alt='Brand' className="notif-modal img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal"/> */}
          <div className="d-flex my-auto">
            <Link href='#'>
              <a className="robert-head"><Image src={robert} width={45} height={45} alt="robert-head"/></a>
            </Link>
              <div className="mx-3 text-center">
                <h3 style={{fontWeight: "700", fontSize: "18px", color: "#FFFFFF", marginBottom: "unset"}}>Robert Chandler</h3>
                <span style={{fontWeight: "400", fontSize: "13px", color: "#FFFFFF"}}>+62 8139 3877 7946</span>
              </div>
              <Link href='#'>
                <a className='' style={{color: 'black', fontSize: '30px'}}>
                  <AiOutlineBell />
                </a>
                </Link>
              {/* <Image src='' className="notif-head mt-2" alt="robert-head"/> */}
          </div>
        </div>
        <div>
          {/* <Modal show = { show } onHide = { handleClose } >
            <Modal.Header closeButton >
              <Modal.Title className = "today ms-3 mt-4"> Today </Modal.Title> 
            </Modal.Header > 
            <Modal.Body >
                <div className = "px-2 mt-2 ms-3 modal-notif w-100">
                  <div className = 'd-flex flex-row modal-pn mb-4 p-3'>
                    <Image src = {arrowdown} alt = "Income" style = {{width: "10%", height: "30px"}}/> 
                    <div className = 'd-flex flex-column' >
                      <span className='modal-span1'> Transfered from Joshua Lee </span> 
                      <span className='modal-span2'> Rp220 .000 </span> 
                    </div > 
                  </div> 
                  <div className = 'd-flex flex-row modal-pn mb-4 p-3'>
                    <Image src = { arrowup } alt = "Expense" style = {{width: "10%", height: "30px"}}/> 
                    <div className = 'd-flex flex-column'>
                      <span className='modal-span1'> Netflix subscription </span> 
                      <span className='modal-span2'> Rp149 .000 </span> 
                    </div > 
                  </div> 
                  <span className = "this-week"> This Week </span> 
                  <div className = 'd-flex flex-row modal-pn my-4 p-3'>
                    <Image src = { arrowup } alt = "Expense" style = {{ width: "10%", height: "30px" }} /> 
                    <div className = 'd-flex flex-column' >
                      <span className='modal-span1'> Transfer to Jessica Lee </span> 
                      <span className='modal-span2'> Rp100 .000 </span> 
                    </div > 
                  </div> 
                  <div className = 'd-flex flex-row modal-pn mb-4 p-3'>
                    <Image src = { arrowdown } alt = "Income" style = {{ width: "10%", height: "30px" }}/> 
                    <div className = 'd-flex flex-column' >
                      <span className='modal-span1'> Top up from BNI E - Banking </span> 
                      <span className='modal-span2'> Rp300 .000 </span> 
                    </div > 
                  </div> 
                </div > 
            </Modal.Body> 
          </Modal >  */}
        </div> 
    </header>
  )
}

export default HeaderDashboard
