
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
  

function App() {
  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);


  }
  const removeBodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
  }
  
  const toggleMode=(cls)=>{
    removeBodyclasses();
    // console.log(cls);
    document.body.classList.add('bg-'+cls);
if(mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='grey';
  showAlert("Dark mode Enables","success");
  document.title='Unity app-DarkMode';
  setInterval(() => {
    document.title='Unity app is amazing';
    
    
  }, 2000);
  

  setInterval(() => {
    document.title='Install Unity App';
    
  }, 2000);

}
else{
  setMode('light')
  document.body.style.backgroundColor='white';
  showAlert("Light mode Enables","success");
  document.title='Unity app-LightMode';
  
}
  }
  return (
   <>
    <Router>
   <Navbar title="Unity app" mode={mode} toggleMode= {toggleMode} abouttext="About"/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about"element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter The Test Analyze"></TextForm>}>
          </Route>
        </Routes>
   {/* <TextForm showAlert={showAlert}heading="Enter The Test Analyze"></TextForm> */}
   </div>
   </Router>
   
   {/* <Navbar/> */}
   </>
   
  );
}

export default App;
