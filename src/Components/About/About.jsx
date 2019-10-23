import React, {Component} from 'react'
import './about.scss'
import aboutImg from '../../assets/ajr.jpg'

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ut. Architecto laudantium quo voluptate aspernatur odio beatae porro consequuntur nam? Minus repellat ipsa quaerat quod dignissimos alias minima laudantium aspernatur?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam voluptatibus ipsa mollitia dolores cupiditate impedit dolorum? Quam tempora reprehenderit enim nam rem dolor id veritatis omnis eum, culpa vel reiciendis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quibusdam consequatur blanditiis veniam similique deleniti aliquid asperiores quos beatae vitae voluptatem sequi est, accusantium deserunt earum id consectetur! Quia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, odio eveniet, ullam rerum autem dicta eos maiores deserunt minus ea, nam quasi. Commodi, ducimus quod laboriosam vero illum non aut.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iusto quae! Eum dolore quo explicabo iure quis praesentium voluptates sequi! Et voluptate nihil dolore praesentium quos ex tenetur iusto maxime.</p>
                    </div>
                </div>
            </div>
        )
    }
}