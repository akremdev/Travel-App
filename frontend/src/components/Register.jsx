import "./register.css"
import {Room} from '@material-ui/icons';



export default function Register() {
    return (
        <div className="registerContainer">
            <div className="logo">
                <Room />
                LakPin
            </div>
            <form>
                <input type="text" placeholder="username"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button className="registerBtn">Register</button>
            </form>
        </div>
    )
}
