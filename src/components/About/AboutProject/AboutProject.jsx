import s from "../About.module.css";

const AboutProject = (props) =>{
  return (
    <div className={s.firstBlock}>
      <div className={s.firstImg}>
        <img src="http://via.placeholder.com/665x389" alt=""/>
      </div>
      <div className={s.aboutProject}>
        <h1>About project</h1>
        <p>*project description*</p>
      </div>
    </div>
  )
}
export default AboutProject