import React from "react";
import Link from 'next/link'

function Data(props) {
  return <span className='search-receiver'> {props.name}</span>
}

function Contacts(props) {
  return <span className='desc-tf'>{props.desc}</span>
}

const Home = () => {
  
  return (
    <>
      {/* <HeaderDashboard /> */}
      <div className="d-flex resp-home">
        {/* <Navbar />
        <HambergerMenu /> */}

        <article className="col-8 col-md-8 container-md">
          <div className="d-md-flex justify-content-between flex-md-row mb-4 p-4 left-slide-home col-md-12">
            <div className="d-flex flex-column">
              <h3 className="balance-home">Balance</h3>
              <h1 className="seratus20-home">Rp. 120.000</h1>
              <h3 className="number-phone-home">+62 813-9387-7946</h3>
            </div>
            <div className="d-flex flex-column">
              <div className="mb-3 home-transfer px-3 py-2">
                {/* <Link href="https://nextjs.org/docs/api-reference/next/head">  */}
                  <img
                    src=''
                    style={{ width: "20%" }}
                    alt="transfer"
                    className="home-tf"
                  />
                  Transfer
                {/* </Link> */}
              </div>
              <div className="home-topup px-3 py-2">
                {/* <Link href=''> */}
                  <img
                    src=''
                    style={{ width: "20%" }}
                    alt="top up"
                    className="home-topup"
                  />
                  Top Up
                {/* </Link> */}
              </div>
            </div>
          </div>

          <aside className="d-md-flex flex-md-row justify-content-between">
            <div className="left-slide d-flex flex-column  col-12 col-md-6 p-5">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <img src='' alt="Income" style={{ width: "30%" }} />
                  <span className="income">Income</span>
                  <span className="expense">Rp 2.120.000</span>
                </div>
                <div className="d-flex flex-column">
                  <img src='' alt="Expense" style={{ width: "30%" }} />
                  <span className="income">Expense</span>
                  <span className="expense">Rp 1.560.000</span>
                </div>
              </div>
              <div>
                <img src='' alt="graphic" className="img-fluid" />
              </div>
            </div>

            <div className="right-slide col-12 col-md-5">
              <div className="d-flex justify-content-between px-4 mt-3">
                <h3 className="trans-history">Transaction History</h3>
                <Link href="/History" className="see-all">
                  See all
                </Link>
              </div>

              <div className="d-flex flex-column gap-4 p-4">
                <div className='d-flex flex-row'>
                    <img src='' alt="Samuel Suhi"/>
                   <div className="d-flex flex-fill justify-content-between">
                    <div className='d-flex flex-column ms-3'>
                        <Data name="Samuel Suhi"/>
                        <Contacts desc="Transfer"/>
                      </div>
                      <span className="home-rp">+Rp 50.000</span>
                   </div>
                </div>
                <div className='d-flex flex-row'>
                    <img src='' alt="Netflix" className="bg-white"/>
                  <div className="d-flex flex-fill justify-content-between">
                    <div className='d-flex flex-column ms-3'>
                      <Data name="Netflix"/>
                      <Contacts desc="Subscription"/>
                    </div>
                    <span className="home-rp2">-Rp149.000</span>
                  </div>
                </div>
                <div className='d-flex flex-row'>
                      <img src='' alt="Christine Mar"/>
                  <div className="d-flex flex-fill justify-content-between">
                      <div className='d-flex flex-column ms-3'>
                        <Data name="Christine Mar..."/>
                        <Contacts desc="Transfer"/>
                      </div>
                      <span className="home-rp">+Rp 150.000</span>
                  </div>
                </div>
                <div className='d-flex flex-row'>
                      <img src='' alt="Adobe Inc." className="bg-white2"/>
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
      </div>
      {/* <FooterDashboard /> */}
    </>
  );
};

export default Home;
