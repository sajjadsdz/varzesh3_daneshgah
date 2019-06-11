import React from 'react';

import './Col.css';


class Col extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div class="widget" data-scroll="0">

        <div class="widget-header">
          <h1>{this.props.Args.header}</h1>
        </div>

        <div class="widget-toolbar">
          {this.props.Args.toolbar}
        </div>

        <div class="widget-content md-padding">
          {this.props.Args.content}
        </div>

        <div class="box-footer">
          {this.props.Args.footer}
        </div>

      </div>

    );
  }
}
export default Col;
