import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class addProduct extends Component{

    render(){
        return(
            <div>
                <form>
                    <label>
                        Product Name:
                        <input type="text" name="Pname"/>

                     </label><br/> 
                     <label>
                        Brand Name:
                        <input type="text" name="Bname"/>
                        
                     </label>  <br/> 
                     <label>
                        Product:
                        <input type="text" name="product"/>
                        
                     </label><br/> 
                     <label>
                        Quantity:
                        <input type="text" name="quantity"/>
                        
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

addProduct.propTypes = {
   asset: PropTypes.object.isRequired
}
export default addProduct;