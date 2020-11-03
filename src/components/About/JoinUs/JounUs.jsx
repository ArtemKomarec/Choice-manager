import s from '../About.module.css'
import {NavLink} from "react-router-dom";

const JoinUs = (props) =>{
  return(
    <div className={s.thirdBlock}>
      <div className={s.secondImg}>
        <img src="http://via.placeholder.com/1336x356" alt=""/>
        <NavLink to="/registration" className={s.joinUsLink}>Join us</NavLink>
      </div>
    </div>
  )
}
export default JoinUs