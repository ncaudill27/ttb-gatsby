import React from 'react'

import FooterLogo from './images/footerLogo'
import FB from './images/iconFB'
import Insta from './images/iconInsta'

import styles from './footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <FooterLogo className={styles.logo} />
        <div className={styles.info}>
          <div>
            <h3>ADDRESS</h3>
            <p>
              51 Johnny Mercer Blvd. <br/>
              Building A-2 Suite A<br/>
              Savannah, GA 31400
            </p>
          </div>
          <div>
            <h3>SOCIAL</h3>
            <div className={styles.icons}>
              <FB className={styles.icon} />
              <Insta className={styles.icon} />
            </div>
          </div>
          <div>
            <h3>PHONE</h3>
            <p>(912) 777-6830</p>
          </div>
          <div>
            <h3>EMAIL</h3>
            <p>thedoctorbeet@gmail.com</p>
          </div>
          <div>
            <h3>HOURS</h3>
            <p>Monday - Friday, 9am - 4pm</p>
          </div>
        </div>
        <div className={styles.copy}>
          <p>&copy; {new Date().getFullYear()} The Tiny Beet. All Rights Reserved.</p>
          <p>Created by Thunder & Lighting.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 