import React, {Component} from 'react'
import './projects.scss'
import Slider from 'react-slick'
import image1 from '../../assets/project-pics/canon-1.png'
import image2 from '../../assets/project-pics/canon-2.png'
import image3 from '../../assets/project-pics/canon-3.png'
import image4 from '../../assets/project-pics/canon-4.png'

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
            autoplaySpeed: 5000
        }
        return (
            <div id="projects">
                <div className="projectPush"></div>
                <div className="project-container">
                    <div className="projectOne">
                        <Slider {...settings}>
                            <img className='projectsImg' src={image1} alt=""/>
                            <img className='projectsImg' src={image2} alt=""/>
                            <img className='projectsImg' src={image3} alt=""/>
                            <img className='projectsImg' src={image4} alt=""/>
                        </Slider>
                    </div>
                    <div className="projectTwo">
                        <Slider {...settings}>
                            <img className='projectsImg' src="https://images.unsplash.com/photo-1517649281203-dad836b4abe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
                            <img className='projectsImg' src="https://images.unsplash.com/photo-1543869664-290274af6667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
                            <img className='projectsImg' src="https://images.unsplash.com/photo-1546146020-c84c6bf355bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt=""/>
                            <img className='projectsImg' src="https://images.unsplash.com/photo-1528313316397-ddee14ed98f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}