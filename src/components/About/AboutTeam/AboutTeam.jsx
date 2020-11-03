import s from "../About.module.css";
import DeveloperDescription from "../DevelopersDescription/DevelopersDescription";

const AboutTeam = (props) =>{
  const DEV_TEAM_ELEMENTS = props.devTeamData.map(obj =>
    <DeveloperDescription name={obj.name}
                          specialization={obj.specialization}
                          description={obj.description}
    />
  )
  return (
    <div className={s.lastBlock}>
      <div className={s.aboutTeam}>
        <h1>About team</h1>
        {DEV_TEAM_ELEMENTS}
      </div>
    </div>
  )
}
export default AboutTeam