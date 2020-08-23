import React from 'react'
import styles from '../CSS/loader.module.css'


const Loader = () => {
    return (
        <div className={styles.main}>

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
    )
}

export default Loader
