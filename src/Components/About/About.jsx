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
                        <ul>
                            <li>Hi my name is McKay Waters and I am a Full-Stack Developer from Pleasant Grove, Utah. I've always had a passion for tech and coding has been that exact fit for me. I love it and I love to continue learning new things.</li>
                            <li>If I'm not coding you can usually find me either with friends or playing video games. Gaming has been a big passion for me my entire life. I've even dabbled in streaming on Twitch and really enjoyed it.</li>
                            <li className='music-li'>Music has also been a passion for me. Though I personally am not very musically talented, I almost always have music playing. Music has connected with me on so many levels that you can find me listening to anything from John Denver to Twenty One Pilots, or Taylor Swift to A Day to Remember</li>
                            <li className='fam-li'>My family and faith are my foundation. I am the youngest of 6 and I love each member of my family to death. I am a member of the Church of Jesus Christ of Latter-Day Saints and served a two year service mission in Lithuania. I enjoyed every minute of it and love the people of Lithuania.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}