import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import DashboardLayout from './dashboardLayout'
import arrowdown from '../../public/icons8-down-24.png'
import arrowup from '../../public/icons8-up-arrow-24.png'
import grafik from '../../public/graphic.png'
import jekeen from '../../public/jessica-keen.png'
import samsuhi from '../../public/sam-suhi.jpg'
import adobe from '../../public/adobe.png'
import netflix from '../../public/netflix.png'

function Data(props) {
  return <span className='search-receiver'> {props.name}</span>
}

function Contacts(props) {
  return <span className='desc-tf'>{props.desc}</span>
}

const Home = () => {
  
  return (
      <DashboardLayout>
          <article className="container-md">
            <div className="d-md-flex justify-content-between flex-md-row mb-4 p-4 left-slide-home col-md-12">
              <div className="d-flex flex-column">
                <h3 className="balance-home">Balance</h3>
                <h1 className="seratus20-home">Rp. 120.000</h1>
                <h3 className="number-phone-home">+62 813-9387-7946</h3>
              </div>
              <div className="d-flex flex-column">
                <div className="mb-3 home-transfer px-3 py-2 m-auto fw-bold">
                  <Link href={'#'}> 
                    <a>
                      <Image
                        src={arrowup} width={17} height={17}
                        alt="transfer" className="mt-1"
                      /> &nbsp;Transfer
                    </a> 
                  </Link>
                </div>
                <div className="home-topup px-3 py-2 m-auto fw-bold">
                  <Link href={'#'}> 
                    <a>
                      <Image
                        src={arrowdown} width={17} height={17}
                        alt="top up"
                      /> &nbsp;Top Up
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <aside className="d-md-flex flex-md-row justify-content-between">
              <div className="left-slide d-flex flex-column  col-12 col-md-6 p-5">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <Image src={arrowdown} alt="Income" />
                    <span className="income mt-3">Income</span>
                    <span className="expense">Rp 2.120.000</span>
                  </div>
                  <div className="d-flex flex-column">
                    <Image src={arrowup} alt="Expense" />
                    <span className="income mt-3">Expense</span>
                    <span className="expense">Rp 1.560.000</span>
                  </div>
                </div>
                <div>
                  <Image src={grafik} alt="graphic" className="Image-fluid" />
                </div>
              </div>

              <div className="right-slide col-12 col-md-5">
                <div className="d-flex justify-content-between px-4 mt-3">
                  <h3 className="trans-history">Transaction History</h3>
                  <Link href={'#'} >
                    <a className="see-all text-dark fw-bold">
                      See all
                    </a>
                    </Link>
                </div>

                <div className="d-flex flex-column gap-4 p-4">
                  <div className='d-flex flex-row'>
                      <Image src={samsuhi} alt="Samuel Suhi"/>
                    <div className="d-flex flex-fill justify-content-between">
                      <div className='d-flex flex-column ms-3'>
                          <Data name="Samuel Suhi"/>
                          <Contacts desc="Transfer"/>
                        </div>
                        <span className="home-rp">+Rp 50.000</span>
                    </div>
                  </div>
                  <div className='d-flex flex-row ms-2'>
                      <Image src={netflix} alt="Netflix" width={60} height={17} className="bg-white"/>
                    <div className="d-flex flex-fill justify-content-between">
                      <div className='d-flex flex-column ms-4'>
                        <Data name="Netflix"/>
                        <Contacts desc="Subscription"/>
                      </div>
                      <span className="home-rp2">-Rp149.000</span>
                    </div>
                  </div>
                  <div className='d-flex flex-row'>
                        <Image src={jekeen} alt="Christine Mar"/>
                    <div className="d-flex flex-fill justify-content-between">
                        <div className='d-flex flex-column ms-3'>
                          <Data name="Christine Mar..."/>
                          <Contacts desc="Transfer"/>
                        </div>
                        <span className="home-rp">+Rp 150.000</span>
                    </div>
                  </div>
                  <div className='d-flex flex-row ms-2'>
                        <Image src={adobe} alt="Adobe Inc." width={60} height={25} className="bg-white2"/>
                    <div className="d-flex flex-fill justify-content-between">
                        <div className='d-flex flex-column ms-3'>
                          <Data name="Adobe Inc."/>
                          <Contacts desc="Subscription"/>
                        </div>
                        <span className="home-rp2">-Rp249.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </article>
      </DashboardLayout>
  );
};

export default Home;
