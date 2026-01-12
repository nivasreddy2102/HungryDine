import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userinfo:{
                name:"dummy",
                location:"dummy",
            }
        }
    }
   async componentDidMount(){
    const data=await fetch("https://api.github.com/users/nivasreddy9")
    const json= await data.json()
    console.log(json)
        // console.log("childmou")
        this.setState({
          userinfo:json
        })
    }

    
    render(){
        // console.log("child re")
        // const{name,location}=this.props;
        const{count}=this.state;
        const{name,location,avatar_url}=this.state.userinfo


        return(
            // <div>
            //     <h1>{this.props.name}</h1>
            //     <h2>{this.props.location}</h2>
            // </div>
            <div>
            {/* <h1>{name}</h1>
            //     <h2>{location}</h2> */}

            <h1>{name}</h1>
            <h1>{location}</h1>
            <img src={avatar_url}/>
            {/* <h1>{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>plus</button>


             <button onClick={()=>{
                this.setState({
                    count:this.state.count-1
                })
            }}>minus </button> */}
            {/* {console.log("inside child")} */}
            </div>
        )
            

       
    }
    

}

export default Userclass;