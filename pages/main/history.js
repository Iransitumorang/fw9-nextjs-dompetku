import React from 'react';

const History = () => {
  return (
    <div>
        {/* <HeaderDashboard /> */}
        <div className='d-flex'>
            {/* <Navbar /> */}
            {/* <HambergerMenu /> */}
            <article className="col-12 col-md-8 ms-5">
                <aside>
                    <div className="right-slide p-md-5 p-0 w-100">
                        <div className="px-4 mt-2">
                            <h3 className="trans-history">Transaction History</h3>
                            <h3 className="my-5 this-week">This Week</h3>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-column w-50">
                                <img src='' alt="History Dashboard"
                                    className="img-fluid"/>
                                <img src='' alt="History Dashboard"
                                    className="img-fluid"/>
                                <h3 className="ms-4 my-4 this-month">This Month</h3>
                                <img src='' alt="History Dashboard"
                                    className="img-fluid"/>
                                <img src='' alt="History Dashboard"
                                    className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </aside>
            </article>
        </div>
        {/* <FooterDashboard /> */}
    </div>
  )
}

export default History