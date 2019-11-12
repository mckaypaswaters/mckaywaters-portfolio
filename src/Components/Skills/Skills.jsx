import React, {Component} from 'react'
// import flag from '../../assets/lietuva.png'
import './skills.scss'

export default class Skills extends Component {
    render(){
        return (
            <div id="skills">
                <div className="skills-container-container">
                    <div className="skills-container">
                        <div className="skills-icon-name">
                            <h2 className='js-text'>JavaScript</h2>
                            <i className="skill-icons devicon-javascript-plain colored"></i>
                        </div>
                        <div className="skills-icon-name">
                            <h2 className='react-text'>React</h2>
                            <i className="skill-icons devicon-react-original colored"></i>
                        </div>
                        <div className="skills-icon-name">
                            <h2 className='node-text'>Node.js</h2>
                            <i className="skill-icons devicon-nodejs-plain colored"></i>
                        </div>
                        <div className="skills-icon-name">
                            <h2 className='html-text'>HTML5</h2>
                            <i className="skill-icons devicon-html5-plain colored"></i>
                        </div>
                        <div className="skills-icon-name">
                            <h2 className='css-text'>CSS3</h2>
                            <i className="skill-icons devicon-css3-plain colored"></i>
                        </div>
                        <div className="skills-icon-name">
                        <h2 className='express-text'>Express</h2>
                            <i className="skill-icons devicon-express-original colored"></i>
                        </div>
                        <div className="skills-icon-name">
                            <h2 className='sass-text'>Sass</h2>
                            <i className="skill-icons devicon-sass-original colored"></i>
                        </div>
                        
                        <div className="skills-icon-name">
                            <h2 className='git-text'>Git</h2>
                            <i className="skill-icons devicon-git-plain colored"></i>
                        </div>
                        <div className="skills-icon-name">
                        <h2 className='vue-text'>Vue</h2>
                            <i className="skill-icons devicon-vuejs-plain colored"></i>
                            
                        </div>
                        <div className="skills-icon-name">
                            <h2 className='elephant-text'>PostgreSQL</h2>
                            <i className="skill-icons devicon-postgresql-plain colored"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}