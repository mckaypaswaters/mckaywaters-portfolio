import React, {Component} from 'react'
import './projects.scss'
import Slider from 'react-slick'

export default class Projects extends Component {
    render(){
        const settings = {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            cssEase: 'linear',
            autoplaySpeed: 4000
        }
        return (
            <div id="projects">
                <div className="projectPush"></div>
                <div className="project-container">
                    <div className="personal-holder">
                        <a href="https://www.canon-creative.com">
                            <h1>Canon Creative</h1>
                        </a>
                        <div className="project-photos-holder">
                            <div className="projectOne">
                                <Slider {...settings}>
                                    <div className="projectsImg1"></div>
                                    <div className="projectsImg2"></div>
                                    <div className="projectsImg3"></div>
                                    <div className="projectsImg4"></div>
                                </Slider>
                            </div>
                        </div>
                        <div className="list-holder">
                            <ul>
                                <li>Photography Website created for my sister to display her portfolio</li>
                                <li>Built using JavaScript, HTML5, Sass, React, Express, PostgreSQL, Amazon S3, and Twilio</li>
                                <li>As an admin on this site you have the ability to add, edit, and delete any photos form the gallery of photos</li>
                                <li>As a user you can view this gallery, read the about page, and contact the admin using Twilio to get in contact quickly</li>
                            </ul>
                        </div>
                    </div>
                    <div className="personal-holder">
                        <a href="https://www.canon-creative.com">
                            <h1>Waka<sup>2</sup></h1>
                        </a>
                        <div className="project-photos-holder">
                            <div className="projectOne">
                                <Slider {...settings}>
                                    <div className="projectsImg5"></div>
                                    <div className="projectsImg6"></div>
                                    <div className="projectsImg7"></div>
                                    <div className="projectsImg8"></div>
                                </Slider>
                            </div>
                        </div>
                        <div className="list-holder">
                            <ul>
                                <li>This is a group project that is currently in production</li>
                                <li>It is our take on the Arcade game Pacman</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}