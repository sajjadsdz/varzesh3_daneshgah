import React, { Fragment } from 'react';

import './ImageSliderSmall.css';

class ImageSliderSmall extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render( ){

    return (



      <div class="news-slider widget">
        <div class="news-slider--carousel widget-slider owl-carousel owl-rtl owl-loaded owl-drag">


          <div class="owl-stage-outer">
            <div class="owl-stage">


              <div class="item">
                <a href="/video/5mWoP" class="image-container" title="خلاصه بازی پرتغال 1 - هلند 0 (فینال لیگ ملت های اروپا)" target="_blank">
                  <div class="video-play-btn"> </div>
                  <img src={this.props.src} alt="خلاصه بازی پرتغال 1 - هلند 0 (فینال لیگ ملت های اروپا)" width="240" height="160"/>
                </a>
                <h4 class="slide-caption rtl">
                  <a href="/video/5mWoP" target="_blank">
                    خلاصه بازی پرتغال 1 - هلند 0 (فینال لیگ ملت های اروپا)
                  </a>
                </h4>
              </div>



            </div>
          </div>

          <div class="owl-nav">
            <div class="owl-prev"></div>
            <div class="owl-next"></div>
          </div>

          <div class="owl-dots">
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot active"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
            <div class="owl-dot"><span></span></div>
          </div>


        </div>
      </div>

    );

  }

}

export default ImageSliderSmall;
