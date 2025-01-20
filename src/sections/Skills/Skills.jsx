import React from 'react'
import Styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import { SkillList } from '../../common/SkillList'
const Skills = () => {
  return (
   <section className={Styles.container}>
    <h1 className='sectionTitle'>Skills</h1>
    <div className={Styles.SkillList}>
       <SkillList src={checkMarkIcon} skill="HTML"/>
       <SkillList src={checkMarkIcon} skill="CSS"/>
       <SkillList src={checkMarkIcon} skill="JAVASCRIPT"/>
       <SkillList src={checkMarkIcon} skill="PYTHON"/>
       <SkillList src={checkMarkIcon} skill="REACT"/>
       <SkillList src={checkMarkIcon} skill="NODE"/>
       <SkillList src={checkMarkIcon} skill="EXPRESS"/>
       <SkillList src={checkMarkIcon} skill="API"/>
       <SkillList src={checkMarkIcon} skill="MYSQL"/>
       <SkillList src={checkMarkIcon} skill="MONGODB"/>
       <SkillList src={checkMarkIcon} skill="GIT"/>
    </div>
   </section>
  )
}

export default Skills