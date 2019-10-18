import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class MMCityHead extends Component{

    render(){
        return(
            <div>
                <form>
                <label>
                        Participant ID:
                        <input type="text" name="Pname"/>

                     </label><br/> 
                     <label>
                        First Name:
                        <input type="text" name="Bname"/>
                        
                     </label>  <br/> 
                     <label>
                        Last Name:
                        <input type="text" name="product"/>
                        
                     </label><br/> 
                     <label>
                        Phone:
                        <input type="text" name="quantity"/>
                        
                     </label><br/> 

                     <label>
                        City:
                        <input type="text" name="price"/>
                        
                     </label><br/> 

                     <input type="submit" value="Submit" />
                </form>
           </div>
        );
    }
}

MMCityHead.propTypes = {
   asset: PropTypes.object.isRequired
}
export default MMCityHead;