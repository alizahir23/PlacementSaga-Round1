import React, { useState } from 'react'
import styles from '../CSS/header.module.css'
import down from '../svg/down.svg'
import downWhite from '../svg/down-white.svg'
import triangle from '../svg/triangle.svg'
import cross from '../svg/cross.svg'

const Header = () => {

    const [Open, setOpen] = useState(false)


    return (
        <div className={styles.header}>
            <div>
                {Open ?
                    <img onClick={() => setOpen(false)} className={styles.cross} src={cross} />
                    :
                    <div onClick={() => setOpen(true)} className={styles.hamburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>}

                {/* LEFT COL */}
                <div className={styles.left}>
                    <div className={styles['logo-text']}>
                        <div>Placement<br />Saga</div>
                    </div>
                    <div className={styles.braces}>
                        {"{"}
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {"}"}
                    </div>
                </div>
                {/* RIGHT COL */}
                <div className={styles.right}>
                    <div><p>Question Library</p></div>
                    <div>
                        <div>
                            <p>Theory Series </p><img src={down} alt=">" />
                        </div>
                        <div className={styles.pop}>
                            <img src={triangle} alt="" />
                            <div>
                                <h3>Data Structures</h3>
                                <h3>Operating Systems</h3>
                                <h3>Database Management Systems</h3>
                            </div>
                        </div>
                    </div>
                    <div><p>Mock Test</p></div>
                    <div><p>Subscribe</p></div>
                    <div><button><div />Login</button></div>
                </div>
            </div>

            <div className={Open ? styles.overlay : styles.closeOverlay}>
                <div><p>Question Library</p></div>
                <div>
                    <p>Theory Series </p>
                </div>
                <div><p>Mock Tests</p></div>
                <div><p>Subscribe</p></div>
            </div>

        </div >
    )
}

export default Header
