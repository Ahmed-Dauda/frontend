
import "./Test.css"

const Add = (props) =>{
    const {x, y} = props;
    
    
    return <div>
        {x} + {y} = {x+y}
     <p className='text-red' > iiiiii </p> 
    </div>

}

export default Add;