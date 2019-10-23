import React, {Component} from 'react'
import logo from '../../assets/mckay2_lettersonly.png'
import logo2 from '../../assets/mckay2_lettersonly(1).png'
import './nav.scss'

export default class Nav extends Component {
    render(){
        return (
            <div id="nav">
            <div id="cf">
                <img className='bottom' src={logo2} alt=""/>
                <img className='top' src={logo} alt=""/>
            </div>
                <ul className='nav-bar'>
                    <a className='a-tags' href="#home">
                        <li>Home</li>
                    </a>
                    <a className='a-tags' href="#about">
                        <li>About</li>
                    </a>
                    <a className='a-tags' href="#projects">
                        <li>Projects</li>
                    </a>
                    <a className='a-tags' href="#skills">
                        <li>Skills</li>
                    </a>
                    <a className='a-tags' href="#contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        )
    }
}