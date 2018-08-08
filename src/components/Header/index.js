import React,{ Component } from 'react';
// import JF from 'jotform';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

    state= {username:'unk'};

    render()
    {
        if(this.props.loggedIn){
            // var apiKey = JF.getAPIKey();
            // let userInfo = JF.getUser(function(response){
            //     this.setState({username:response.username});
            // });
        }


        return(
            <header className="App-header">
                <div className="Header-content">
                    <div className="App-logoWrapper">
                        <a className="App-TitleLink" href="#"><span className="App-title">Tracker</span><span className="AppTitle-subtext"> by JotForm</span></a>
                    </div>
                    <div className="App-menuWrapper">
                            {
                                !this.props.loggedIn
                                &&
                                (
                                <ul className="Header-menuItemList">
                                    <Link to="/"><li onClick={this.props.OnLoginClick}><span>Login</span></li></Link>
                                    <Link to="/dashboard"><li onClick={this.props.OnSignupClick}><span>Signup</span></li></Link>
                                </ul>
                                )
                            }
                            {
                                this.props.loggedIn
                                &&
                                (
                                <ul className="Header-menuItemList">
                                    <li>Hello, {this.state.username}</li>
                                    <Link to=""><li onClick={this.props.OnLogoutClick}><span>Logout</span></li></Link>
                                </ul>
                                )
                            }

                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
