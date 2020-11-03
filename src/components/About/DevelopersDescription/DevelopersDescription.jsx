import s from './DevelopersDescription.module.css'

function DeveloperDescription(props) {
  return (
    <div className={s.content}>
      <div className={s.developerImg}>
        <img src="http://via.placeholder.com/250x160" alt=""/>
      </div>
      <div className={s.developerDescription}>
        <p>
          {props.name}
          <br/>{props.specialization}
          <br/>{props.description}
        </p>
      </div>
    </div>
  )
}

export default DeveloperDescription;