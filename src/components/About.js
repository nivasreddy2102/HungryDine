import React from 'react'
import Userclass from './Userclass'
import React from 'react'

// function About() {
//   return (
//     <div>
//     <Userclass name="k.Nivas Reddy" location="Hyderabad"/>
//     </div>
//   )
// }

class About extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        // console.log("parentmount");
    }
    render(){
        // console.log("parent")
        return(
            <div>
                <h1>parent</h1>
                <Userclass/>
                {/* {console.log("inside parent")} */}
            </div>
        )
    }

}


export default About;