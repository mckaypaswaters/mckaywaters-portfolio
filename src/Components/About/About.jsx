import React, {Component} from 'react'
import './about.scss'
import aboutImg from '../../assets/about_page.JPG'

export default class About extends Component {
    render(){
        return (
            <div id="about">
                <div className="about-push"></div>
                <div className="about-container">
                    <div className="about-img-container">
                        <img className='about-img' src={aboutImg} alt=""/>
                    </div>
                    <div className="about-text-container">

                    </div>
                </div>
            </div>
        )
    }
}