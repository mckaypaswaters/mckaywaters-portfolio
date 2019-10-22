import React, {Component} from 'react'
// import flag from '../../assets/lietuva.png'
import './skills.scss'

export default class Skills extends Component {
    render(){
        return (
            <div id="skills">
                <div className="skills-container-container">
                    <div className="skills-container">
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-nodejs-plain colored"></i>
                        <i className="devicon-html5-plain colored"></i>
                        <i className="devicon-css3-plain colored"></i>
                        <i className="devicon-sass-original colored"></i>
                        <i className="devicon-postgresql-plain colored"></i>
                        {/* <i className="devicon-amazonwebservices-plain-wordmark colored"></i> */}
                        <i className="devicon-vuejs-plain colored"></i>
                        <i className="devicon-express-original colored"></i>
                        <i className="devicon-git-plain colored"></i>
                        {/* <img src={flag} alt=""/> */}
                        {/* <i className="devicon-photoshop-plain colored"></i> */}
                    </div>
                </div>
            </div>
        )
    }
}