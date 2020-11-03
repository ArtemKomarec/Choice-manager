import s from './About.module.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutProject from "./AboutProject/AboutProject";
import ProjectCounts from "./ProjectCounts/ProjectCounts"
import JoinUs from "./JoinUs/JounUs";
import AboutTeam from "./AboutTeam/AboutTeam";




const About = (props) => {
  return (
    <div className={s.content}>
      <Header/>
      <AboutProject/>
      <ProjectCounts/>
      <JoinUs/>
      <AboutTeam devTeamData={props.devTeamData}/>
      <Footer/>
    </div>

  )
}

export default About