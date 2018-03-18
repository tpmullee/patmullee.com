'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.certificates
    },

    render: function () {
        const achievementDate = Datetime.getDisplayFromDate(this.props.entry.achievementDate);

        if(this.props.entry.title2){
          const achievementDate2 = Datetime.getDisplayFromDate(this.props.entry.achievementDate2);

          return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.institution}</h3>
                    <p className='info'>
                        {this.props.entry.title}
                        <span> &bull; </span>
                        <em className='date'>{achievementDate}</em>
                    </p>
                    <p className='info'>
                        {this.props.entry.title2}
                        <span> &bull; </span>
                        <em className='date'>{achievementDate2}</em>
                    </p>
                </div>
            </div>
          );}

        else{

          return (
              <div className='row item'>
                  <div className='twelve columns'>
                      <h3>{this.props.entry.institution}</h3>
                      <p className='info'>
                          {this.props.entry.title}
                          <span> &bull; </span>
                          <em className='date'>{achievementDate}</em>
                      </p>
                  </div>
              </div>
          );}
    }
});

const Certificates = React.createClass({
    propTypes: {
        content: ResumePropTypes.certificatesSet
    },

    render: function () {
        return (
            <section id='certificates'>
                <div className='row education'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Certificates</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Certificates;
