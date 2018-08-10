import React,{ Component } from 'react';
// import JF from 'jotform';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {


    render()
    {



        return(
            <header className="App-header">
                <div className="Header-content">
                    <div className="App-logoWrapper">
                        <a className="App-TitleLink" href="/"><span className="App-title">Tracker</span><span className="AppTitle-subtext"> by JotForm</span></a>
                    </div>
                    <div className="App-menuWrapper">
                            {
                                !this.props.loggedIn
                                &&
                                (
                                <ul className="Header-menuItemList">
                                    <li onClick={this.props.OnLoginClick}><Link to="/"><span>Login</span></Link></li>
                                    <li ><a href="https://www.jotform.com/signup"><span>Signup</span></a></li>
                                </ul>
                                )
                            }
                            {
                                this.props.loggedIn
                                &&
                                (
                                <ul className="Header-menuItemList">
                                    <li>Hello, {this.props.user.username}</li>
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
