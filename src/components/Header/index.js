import React,{ Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import requestHandler from '../RequestHandler';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    OnLoginClick= (event) =>
    {
        event.preventDefault();

        let loginInfo={
            username:this.state.username,
            password:this.state.password,
            appName:'routineTracker',
            access:'full'
        }

        requestHandler.logIn(loginInfo).then((resp)=>{
            console.log(resp);
            if(resp.data.responseCode===200){
                this.props.actions.LogIn();
                this.props.actions.SetUser(resp.data.content);
            }else{
                window.alert("An error occured, try again later.")
            }
        });

        //
        // window.JF.login(
        //     () => {
        //     window.JF.getUser((user) => {
        //         this.props.actions.LogIn();
        //         this.props.actions.SetUser(user);
        //     },(err) => console.log(err) )
        //
        //     }
        //     ,
        //     (err) => console.log(err)
        // );
    }

    OnLogoutClick= () => {
        window.JF.logout();
        this.props.actions.LogOut();
    }

    onUsernameInputChange=(event) => {
        this.setState({username:event.target.value})
    }

    onPasswordInputChange=(event) => {
        this.setState({password:event.target.value})
    }

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
                                    <li><form onSubmit={this.OnLoginClick}>
                                            <input type="text" placeholder="Username" onChange={this.onUsernameInputChange} name="username"/>
                                            <input type="password" placeholder="Password" onChange={this.onPasswordInputChange} name="password"/>
                                            <input type="submit" value="Login" />
                                        </form>
                                    </li>
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
                                    <Link to=""><li onClick={this.OnLogoutClick}><span>Logout</span></li></Link>
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
