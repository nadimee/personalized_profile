
import './App.css';
import Profile from './profile/profile';

function App() {

 let handleName = (name) => name;

  return (
    <div className="App"  style={{marginRight: "25%", marginLeft: "25%", marginTop: "3%"}}>

      <Profile  userName={handleName("Nadime Ben Abdel Kader")} fullName="Nadime Ben Abdel Kader" bio="Hello , i'm nadime my age is 27 , a javascript student in Gomycode before that i was a student in another school ." profession="Javascript student">
        <img src='profilePic.jpg' alt='me'  style={{width:"210px",height:"290px",marginTop:"7%",marginLeft:"20%",borderRadius: "10% 30% 50% 70%",boxShadow:"5px 10px rgba(120, 250, 159, 0.4)"}} />
      </Profile>

    </div>
  );
}

export default App;
