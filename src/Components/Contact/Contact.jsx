import React, {Component} from 'react'
import './contact.scss'

export default class Contact extends Component {
    render(){
        return (
            <div id="contact">
                <div className="contact-push"></div>
                <div className="contact-parent">
                    <div className="contact-container">
                        <div className="contact-icon-container">
                            <i className="contact-icon far fa-envelope"></i>
                            <h1 className='contact-text'>mckaypaswaters@gmail.com</h1>
                        </div>
                        <div className="contact-icon-container">
                            <i className="contact-icon-phone fas fa-mobile-alt"></i>
                            <h1 className='contact-text'>{`(385) 230-2568`}</h1>
                        </div>
                        <a href='https://github.com/mckaypaswaters' className="contact-icon-container">
                            <i className="contact-icon devicon-github-plain"></i>
                            <h1 className='contact-text'>{`https://github.com/mckaypaswaters`}</h1>
                        </a>
                        <a href='https://www.linkedin.com/in/mckay-waters/' className="contact-icon-container">
                            <i className="contact-icon fab fa-linkedin-in"></i>
                            <h1 className='contact-text'>{`https://www.linkedin.com/in/mckay-waters/`}</h1>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}