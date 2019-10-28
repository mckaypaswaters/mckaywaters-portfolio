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
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci aliquam quasi expedita cum necessitatibus animi quod, quidem deleniti</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi ex nostrum fuga neque, veritatis laborum cumque dolores laudantium</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
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
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci aliquam quasi expedita cum necessitatibus animi quod, quidem deleniti</li>
                                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi ex nostrum fuga neque, veritatis laborum cumque dolores laudantium</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}