import React ,{Component} from 'react';
import PropTypes from 'prop-types';
 
 
class SignUp extends Component{

    render(){
        return(
            <div>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="Fname"/>

                     </label><br/>
                     <label>
                        Last Name:
                        <input type="text" name="Lname"/>

                     </label><br/> 
                     <label>
                        Phone:
                        <input type="text" name="phone"/>

                     </label><br/>
                     <label>
                        Date of Birth:
                        <input type="text" name="dob"/>

                     </label><br/> 
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
                 
           </div>
        );
    }
}
 
SignUp.propTypes = {
    asset: PropTypes.object.isRequired
}
 

export default SignUp;