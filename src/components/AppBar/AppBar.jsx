import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.scss'
export default function AppBar(params) {
    return (
        <header>
            <nav>
                <ul className={styles.navContainer}>
                    <li className={styles.activeScale}><NavLink to='/' exact activeClassName={styles.active} className={styles.navItem}>Home</NavLink></li>
                    <li className={styles.activeScale}><NavLink to='/portfolio' activeClassName={styles.active} className={styles.navItem}>Potfolio</NavLink></li>
                    <li className={styles.activeScale}><NavLink to='/certificate' activeClassName={styles.active} className={styles.navItem}>Certificate</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}