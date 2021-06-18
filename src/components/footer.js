import React from "react"

import FooterLogo from "./images/footerLogo"
import FB from "./images/iconFB"
import Insta from "./images/iconInsta"
import ACLM from "./images/logoACLM"
import AAP from "./images/logoAAP"

import styles from "./footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <FooterLogo className={styles.logo} />
        <div className={styles.details}>
          <div className={styles.stack}>
            <div>
              <h3>ADDRESS</h3>
              <p>
                51 Johnny Mercer Blvd. <br />
                Building A-2 Suite A<br />
                Savannah, GA 31400
              </p>
            </div>
            <div>
              <h3>PHONE</h3>
              <p>(912) 777-6830</p>
            </div>
            <div>
              <h3>EMAIL</h3>
              <p>thedoctorbeet@gmail.com</p>
            </div>
          </div>
          <div className={styles.stack}>
            <div>
              <h3>HOURS</h3>
              <p>Monday - Friday, 9am - 4pm</p>
            </div>
            <div>
              <h3>FIND US ON SOCIAL!</h3>
              <div className={styles.icons}>
                <a
                  href="https://instagram.com/thedoctorbeet?igshid=1e95ag0yyg2o4"
                  className={styles.icon}
                >
                  <Insta alt="Instagram logo linking to The Tiny Beet social media" />
                </a>
                <a
                  href="https://www.facebook.com/thedoctorbeet/"
                  className={styles.icon}
                >
                  <FB alt="Facebook logo linking to The Tiny Beet social media" />
                </a>
              </div>
            </div>
            <div className={styles.copy}>
              <p>
                &copy; {new Date().getFullYear()} The Tiny Beet. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div className={styles.stack} style={{ gap: "32px" }}>
            <h3>BOARD CERTIFICATIONS</h3>
            <div className={styles.board}>
              <AAP />
            </div>
            <div className={styles.board}>
              <ACLM />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
