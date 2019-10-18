import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Billing extends Component{
    render(){
        return(
            <div>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="name"/>

                     </label><br/> 
                     <label>
                        Last Name:
                        <input type="text" name="Lname"/>
                        
                     </label>  <br/> 
                     <label>
                        Phone:
                        <input type="text" name="phone"/>
                        
                     </label><br/> 
                     <label>
                        Product:
                        <input type="text" name="Product"/>
                        
                     </label><br/> 

                     <label>
                        Price:
                        <input type="text" name="price"/>
                        
                     </label><br/> 

                     <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

Billing.propTypes = {
    asset: PropTypes.object.isRequired
} 


export default Billing;