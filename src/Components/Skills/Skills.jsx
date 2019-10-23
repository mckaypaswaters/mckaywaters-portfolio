import React, {Component} from 'react'
// import flag from '../../assets/lietuva.png'
import './skills.scss'

export default class Skills extends Component {
    render(){
        return (
            <div id="skills">
                <div className="skills-container-container">
                    <div className="skills-container">
                        <i className="skill-icons devicon-javascript-plain colored"></i>
                        <i className="skill-icons devicon-react-original colored"></i>
                        <i className="skill-icons devicon-nodejs-plain colored"></i>
                        <i className="skill-icons devicon-html5-plain colored"></i>
                        <i className="skill-icons devicon-css3-plain colored"></i>
                        <i className="skill-icons devicon-sass-original colored"></i>
                        <i className="skill-icons devicon-postgresql-plain colored"></i>
                        <i className="skill-icons devicon-vuejs-plain colored"></i>
                        <i className="skill-icons devicon-express-original colored"></i>
                        <i className="skill-icons devicon-git-plain colored"></i>
                    </div>
                </div>
            </div>
        )
    }
}