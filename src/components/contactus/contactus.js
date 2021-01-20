import React, { Component } from 'react';
// import TweetEmbed from 'react-tweet-embed';
// import Tweet from '../../Tweet';
 
export default class ContactUs extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <div class="col-6">
              <aside className="eigth columns footer-widgets">

                <h2>Contact Details</h2>
                <div className="widget">
                  <h4>Email : {resumeData.email}</h4>
                  <h4>Phone1 : {resumeData.phone1}</h4>
                  <h4>Phone2 : {resumeData.phone2}</h4>
                </div>
              </aside>
            </div>

            <div class="col-6">
              <aside className="eigth columns footer-widgets">

                <h2>Interesting Medium Articles</h2>
                <div className="widget">
                <ul>
                  <li><a href="https://medium.com/javascript-in-plain-english/build-a-simple-todo-app-with-react-561579b39ad1">Building a simple Todo app with react.</a></li>
                  <li><a href="https://chathuranga94.medium.com/introduction-to-react-hooks-4694fe2d0fc0">Introduction to react hooks.</a></li>

                  <li><a href="https://medium.com/edge-coders/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2">All the fundamental React.js concepts, jammed into this single Medium article.</a></li>
                </ul>
                </div>
              </aside>
            </div>
            
          </div>
        </section>
        );
  }
}
