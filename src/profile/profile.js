import PropTypes from "prop-types";



const profile = (props)=>{

return (
    
    <div style={{textAlign:"justify",marginRight: "25%",marginLeft: "25%"  }}>    
     {alert(props.userName)}
     {props.children}
     <div style={{backgroundColor:"#38778373",paddingBottom:"15px",paddingRight:"50px",paddingLeft:"20px",borderRadius: "10px 100px / 120px"}}>
     <h3><span className="spans">Name : </span><span className="sspans">{props.fullName}</span></h3>
     <h3><span className="spans">Bio : </span><span className="sspans">{props.bio}</span></h3>
     <h3><span className="spans">Profession : </span><span className="sspans">{props.profession}</span></h3>
     </div>
    </div>
    
) ;
}

profile.defaultProps={      
    userName : "Nadime Ben Abdel Kader",
    fullName : "Nadime Ben Abdel Kader" ,
    bio : `Hello , i'm nadime my age is 27 , a javascript
           student in Gomycode before that i was a student
           in another school and domain .` ,
    profession : "Javascript student"
}

profile.propTypes = { 
    userName : PropTypes.string,
    fullName: PropTypes.string,
    bio  : PropTypes.string,
    profession : PropTypes.string

   };
export default profile;