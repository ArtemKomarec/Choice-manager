import s from '../About.module.css'

const ProjectCounts = (props) => {
  return (<div className={s.secondBlock}>
      <div className={s.countOfRegistration}>
        <p>Count of registrations: *count from server</p>
      </div>
      <div className={s.countOfGoals}>
        <p>Count of goals: *count from server</p>
      </div>
    </div>
  )
}
export default ProjectCounts