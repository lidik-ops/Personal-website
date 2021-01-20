import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed';
import Tweet from '../../Tweet';
 
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
                <div className="widget">
                  <TweetEmbed id ="1350947029829218305" options={{cards: 'hidden'}}/>
                </div>
              </aside>
            </div>
            
          </div>
        </section>
        );
  }
}
