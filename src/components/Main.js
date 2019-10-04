import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/intro-pic.jpg'
import pic02 from '../images/about-pic.jpg'
import pic03 from '../images/contact-pic.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="Hello" />
          </span>
          <p>
            Hi, I'm Alex and i am a very unique indiviual. I feel that the
            feature the defines me is charm. I am a motivated and energetic
            individual but my biggest strength is my ability to create bonds
            with strangers. My friendly and relxed demeanor can instantly disarm
            the majority of people. I am always up for a game of pool or a
            cruise through town on my skateboard. I am very competitive so
            invitations are welcome.
          </p>
          <p>
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Everyday i come into work ad improve the image of the company i work
            for. I work with insurance; and that is one of the least enjoyable
            tasks that a contrator wants to undertake. What i like to do it to
            make the experience more enjoyable for everyone. My favourit
            experiences are the way that my coworkers frequently complienntn me
            after hearing me deal with objections and diffiulties of
            contractors. "You are always so calm".
          </p>
          <p>
            My friendly and calm nature have resulted in many contractor being
            much more comfortable with such a rigorous and tedious process. It
            has also resulted in a formal compliment for my services from a
            contractor. This is a skill that i have developed with years of
            sales experience; I use it very effectively.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I am a humble person with a big personality. I always consider the
            needs of others first, and through cooperation I am able to find the
            best outcome for all. Having fun does not begin and end with the
            span of my spare-time. I like to make people smile wherever I go;
            the effects of this are very noticible. I have a wide variety of
            interests, from watching the leafs play, to going to musicals. I
            know that Tavares is the right choice for captain this year and my
            tickets for Hamilton are already purchased. I like to see myself as
            a varied indivdual that can offer something for every personality. I
            think that the best way to impart my wisdom, is to do it within the
            flow of the conversation.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Say Hello</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/alex-cowan-53112910b/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/alex.cowan2"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/cowan72/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            {/* <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li> */}
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
