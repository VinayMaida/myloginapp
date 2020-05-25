import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component{  
    out(){
        localStorage.removeItem('user');    
   }
render() {
    return(
        <div>
        <div block
        style={{backgroundColor: '#00BFFF', borderColor: '#45A293'}}>WELCOME USER
        </div>
        <div className="form-group">
                        <Link to="/login" onClick={this.out} className="btn btn-danger">LogOut</Link>
        </div>
        </div>
        )
}}
export default Home;