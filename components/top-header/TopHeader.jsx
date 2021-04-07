import React, { useState } from "react";
import topHeader from "./TopHeader.module.css";
import ModalContent from "../ModalContent/ModalContent";

const TopHeader = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={topHeader.topHeaderBar}>
      <div className='container-fluid'>
        <div className='row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center'>
          <div className='col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0'>
            <div className={topHeader.headerBarEmail}>
              MAIL:
              <a href='#'>
                <span
                  className='__cf_email__'
                  data-cfemail='a9cac6c7ddc8cadde9c6dcdbcac1c8dbc0ddd087cac6c4'
                >
                  fundacionoxlajuj@gmail.com
                </span>
              </a>
            </div>
            <div className={topHeader.headerBarText}>
              <p>
                PHONE: <span>+24 3772 120 091 / +56452 4567</span>
              </p>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center'>
            <div className={topHeader.donate}>
              <button onClick={handleShow} className={topHeader.carBtn}>
                DONAR{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {show ? <ModalContent show={show} handleClose={handleClose} /> : null}
    </div>
  );
};

export default TopHeader;
