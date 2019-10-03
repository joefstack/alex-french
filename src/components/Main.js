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
            <img src={pic01} alt="" />
          </span>
          <p>
            Motivated and results-oriented bilingual professional with
            outstanding project management skills. Expert researcher with flair
            for analysis, reporting and presentations. Keenly interested in
            developing a career in business intelligence and providing a
            vertical bridge to communicate information of high value to support
            decision making. Possesses knowledge and experience spanning various
            business fields such as Sales, Account Management, Customer
            Retention, Information Management and Marketing. Recognized as a
            collaborative team player with excellent interpersonal skills and
            the ability to build solid working relationships.
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
            • Evaluated French and English certificates of insurance to
            establish adequate coverages and amounts were included to meet or
            exceed the requirements of clients like Cineplex and Loblaws •
            Reviewed documents such as licenses, agreements, and workers’
            compensation as required • Communicated by email in French and
            English to contractors and insurance brokers specific modifications
            that needed to be made to their insurance or any document that was
            missing • Resolved issues over the phone in French and English with
            contractors and brokers further explaining client insurance
            requirements or providing tech support with navigating the recently
            upgraded website
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
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
            Motivated and results-oriented bilingual professional with
            outstanding project management skills. Expert researcher with flair
            for analysis, reporting and presentations. Keenly interested in
            developing a career in business intelligence and providing a
            vertical bridge to communicate information of high value to support
            decision making. Possesses knowledge and experience spanning various
            business fields such as Sales, Account Management, Customer
            Retention, Information Management and Marketing. Recognized as a
            collaborative team player with excellent interpersonal skills and
            the ability to build solid working relationships.
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
