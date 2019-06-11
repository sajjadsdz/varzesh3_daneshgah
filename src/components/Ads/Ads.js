import React from 'react';

import './Ads.css';


class Ads extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div class="ad undefined">
                <a href={this.props.Args.link} target="_blank" rel="nofollow noopener">
                    <img src={this.props.Args.image_src} width={this.props.Args.width} height={this.props.Args.height}/>
                </a>
            </div>    
        );
    }
}
export default Ads;
