import styles from './Home.module.scss'
import myphoto from '../../images/myphoto.jpg'
import beach from '../../video/Computer.mp4'
import Typical from 'react-typical'
export default function Home() {
    return (
        <>
            <div className={styles.homeContentContainer}>
            <div className={styles.videoBox}>
                        <Typical
                            className={styles.text}
                        steps={['Hi there!', 1000,
                            'My names Roman and I аm a Front end Developer!', 1000,
                            'I like teamwork.', 1000,
                            'I аm ambitious.', 1000,
                            'I аm creative.', 1000,
                            'I аm disciplined.',1000
                        ]}
                         loop={Infinity}
                         wrapper="p"
                         />
                    <video src={beach} className={styles.video}  autoPlay loop playsInline muted preload='auto'></video>
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