import style from "./style.module.css";

const TopHeader = () => {
  return (
    <div className={style.topHeaderBar}>
      <div className='container'>
        <div className='row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center'>
          <div className='col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0'>
            <div className={style.headerBarEmail}>
              MAIL:
              <a href='#'>
                <span
                  className='__cf_email__'
                  data-cfemail='a9cac6c7ddc8cadde9c6dcdbcac1c8dbc0ddd087cac6c4'
                >
                  fundacionoxlaju@gmail.com
                </span>
              </a>
            </div>
            <div className={style.headerBarText}>
              <p>
                PHONE: <span>+24 3772 120 091 / +56452 4567</span>
              </p>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center'>
            <div className={style.donate}>
              <a href='#'>Donar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
