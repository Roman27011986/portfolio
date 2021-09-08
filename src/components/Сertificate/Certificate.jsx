import certificate from "../../images/certificate.jpg"
import styles from './Certificate.module.scss'
export default function Certificate(params) {
    return (
        <div className={styles.certificateContainer}>
            <img className={styles.certificate} src={certificate} alt="" />
        </div>
    )
}