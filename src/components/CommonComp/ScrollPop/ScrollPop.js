import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./ScrollPop.module.scss";

const Scrollpop = () => {
    const [scroll, setScroll] = useState(false);
    const hideBtn = () => {
        if (window.scrollY > 500) setScroll(true);
        else setScroll(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", hideBtn);
        return () => window.removeEventListener("scroll", hideBtn);
    }, [])

    return (
        <div>
            {scroll &&
                (
                    <motion.div
                        initial={{ y: '100vw' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 30 }}
                        className={styles.scrollPop} onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}) }}>
                        <div>
                            <i className='fas fa-chevron-up fa-2x'></i>
                        </div>
                    </motion.div>
                )}
        </div>
    );
};

export default Scrollpop;