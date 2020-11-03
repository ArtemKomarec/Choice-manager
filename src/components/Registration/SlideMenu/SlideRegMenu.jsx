    import s from "../Registration.module.css";
import {NavLink} from "react-router-dom";

const SlideRegMenu = (props) =>{
  return(
    <div className={s.rightSide}>
      <div className={s.rightHeader}>
        <h1 className={s.rightH1}>Welcome to Choice Manager</h1>
      </div>
      <div className={s.rightLogin}>
        <h3 className={s.rightLoginh2}>Registration</h3>
        <div className={s.rightLoginUser}>
          <input type="firstName" placeholder="First name" className={s.firstName} />
          <input type="secondName" placeholder="Second name" className={s.secondName}/>
          <input type="Email" placeholder="Email" className={s.email}/>
          <input type="Username" placeholder="Username" className={s.username}/>
          <input type="phoneNumber" placeholder="Phone number" className={s.phoneNumber}/>
          <input type="password" placeholder="Password" className={s.password}/>
          <input type="confPassword" placeholder="Confirm password" className={s.confPassword}/>
          <div className={s.button} >
            <NavLink to={"/"} ><p className={s.rightText}>Register</p></NavLink>
          </div>
        </div>
      </div>
      <div className={s.rightFooter}>
        Already registered? <NavLink to="/login">Log in</NavLink>
      </div>
    </div>
  )
}
export default SlideRegMenu