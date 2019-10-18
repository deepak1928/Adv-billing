import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
class Login extends Component{

    render(){
        return(
            <div>
                <form>
                    <label>
                        email:
                        <input type="text" name="email"/>

                     </label><br/>
                     <label>
                        Password:
                        <input type="password" name="password"/>

                     </label><br/> 
                    <input type="submit" value="Submit" />
                </form>
                <Link to="/signUp">If not registered. Click Here</Link>
                
           </div>
        );
    }
}
 
Login.propTypes = {
    asset: PropTypes.object.isRequired
}
 

export default Login;