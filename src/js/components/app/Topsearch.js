import React from "react";

export default class Topsearch extends React.Component {

  render() {
    const { location } = this.props;

    return (

      <div className="topsearch">
        <form className="topsearch-form">
          <button className="topsearch-form-button pull-right"><span className="glyphicon glyphicon-search"></span></button>
          <div className="topsearch-form-field">
            <input type="text" className="topsearch-form-input" value="" />
          </div>
          <div className="clearfix"></div>
        </form>
      </div>

    );
  }
}
