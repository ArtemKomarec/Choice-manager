import s from "../LoginComponent.module.css";
import {Link, NavLink} from "react-router-dom";

const SlideLoginMenu = (props) =>{
  return(
    <div className={s.rightSide}>
      <div className={s.rightHeader}>
        <h1 className={s.rightH1}>Welcome to Choice Manager</h1>
      </div>
      <div className={s.rightLogin}>
        <h3 className={s.rightLoginh2}>Login</h3>
        <div className={s.rightLoginUser}>
          <input type="Username" placeholder="Username" className={s.login} />
          <input type="Password" placeholder="Password" className={s.password}/>
          <div className={s.button} >
              <NavLink to={"/"}><p className={s.rightText}>Login</p></NavLink>
          </div>
        </div>
      </div>
      <div className={s.rightFooter}>
        No account? <NavLink to={"/registration"}>Create One!</NavLink>
      </div>
    </div>
  )
}
export default SlideLoginMenu