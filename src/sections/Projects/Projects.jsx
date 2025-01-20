
import styles from './ProjectsStyles.module.css'
import Home from '../../assets/homePage.png'
import Gallery from '../../assets/Gallery.jpeg'
import ProjectCard from '../../common/ProjectCard';
import estate from '../../assets/estate.jpeg'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className={styles.sectionTitle}>Projects</h1>
        <div className={styles.projectsContainer}>
           <ProjectCard src={Home} link='https://github.com/itsuj/unis-social-client' h3='Unis' p='Social media app'/>
          <ProjectCard src={Gallery} link='https://gallery-app-frontend.onrender.com/' h3='Image App' p='Image Gallery Project'/>
          <ProjectCard src={estate} link='https://real-estate-page-mn25.onrender.com/' h3='Real estate' p='Real estate landing page'/>
        </div>
    </section>
  )
}

export default Projects;