import styles from './HeroStyles.module.css'
import sujit from '../../assets/sujit.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import '../../App.css'
function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={sujit} alt="Profile picture of Sujit" />
            <img className={styles.colorMode} src={themeIcon} alt="" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>
                Sujit Kumar
                <br />
                Jha
            </h1>
            <h2>Web Developer</h2>
            <span>
                <a href="#" target='_blank'>
                    <img src={twitterIcon} alt="" />
                </a>
                <a href="https://github.com/itsuj" target='_blank'>
                    <img src={githubIcon} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/sujit-kumar-jha-b7662a22b/" target='_blank'>
                    <img src={linkedinIcon} alt="" />
                </a>
            </span>
            <p className={styles.description}>Web Developer with a BSc in Information Technology and experience in web development. Focused on building functional web applications, with knowledge in both front-end and back-end technologies. </p>
            <a href={cv} download>
                <button className={styles.hover} >Resume</button>
            </a>
        </div>
    </section>
}

export default Hero;