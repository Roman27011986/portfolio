import styles from './Home.module.scss'
import myphoto from '../../images/myphoto.jpg'
export default function Home() {
    return (
        <>
        <div className={styles.homeContentContainer}>
            <div>
                <h1 className={styles.title}>Hi there!</h1>
                <p className={styles.text}>My name's Roman and I’m a Front-end Developer!</p>
            </div>
            <div className={styles.imgBox}>
                <img className={styles.mainImg} src={myphoto} alt="" />
            </div>
            </div>
            <div className={styles.contactsBox}>
                <h2 className={styles.title}>Tech Skills:</h2>
                <ul className={styles.techSkills}>
                    <li className={styles.techSkillsItem}><div className={styles.iconhtml}></div><span className={styles.techSkillsText}>HTML5</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconcss}></div><span className={styles.techSkillsText}>CSS3</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconsass}></div><span className={styles.techSkillsText}>Sass</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconjavascript}></div><span className={styles.techSkillsText}>JavaScript</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconreact}></div><span className={styles.techSkillsText}>React.js</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.icongit}></div><span className={styles.techSkillsText}>GIT</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconredux}></div><span className={styles.techSkillsText}>Redux</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconnode}></div><span className={styles.techSkillsText}>Node.js</span></li>
                    <li className={styles.techSkillsItem}><div className={styles.iconmongo}></div><span className={styles.techSkillsText}>MongoDB</span></li>
                </ul>
            </div>
           
            </>
    );
};