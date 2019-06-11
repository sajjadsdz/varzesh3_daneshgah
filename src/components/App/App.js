import React, { Fragment } from 'react';

import ReactDOM from 'react-dom';

import { connect, Provider } from 'react-redux';
import addItem from '../../actions/addItem'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Col from '../Col/Col';
import MyTable from '../Table/Table';
import ImageSlider from '../ImageSlider/ImageSlider';
import ImageSliderSmall from '../ImageSliderSmall/ImageSliderSmall';

import Ads from '../Ads/Ads';

import './App.css';


const mapStateToProps = state =>({
  items : state.list.items
})

const mapDispatchToProps = dispatch => ({
  addItem : function(value) {
    return dispatch(addItem(value))
  }
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }


  addItem (e) {
    if (e.keyCode == 13) {
      debugger
      this.props.addItem(e.target.value)
    }
  }


  // setStateCounter(value) {
  //   this.setState({ counter: value });
  // }

  // counterSum(value){
  //   this.setStateCounter(this.state.counter + value);
  // }

  // counterInc(value = 1) {
  //   this.counterSum(value);
  // }

  // counterDec(value = -1) {
  //   this.counterSum(value);
  // }

  // counterChangeOnChangeEvent(event){
  //   this.setStateCounter(Number(event.target.value));
  // }



  render( ){

    const AdArgs = [
      {
        link: "http://ads.farakav.com/clk?av=L_YN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=0",
        image_src: "https://static.farakav.com/v3/static/bpx/00910895.gif",
        width: "130",
        height: "600"
      },
      {
        link: "http://ads.farakav.com/clk?av=8eUN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1",
        image_src: "https://static.farakav.com/v3/static/bpx/00910833.gif",
        width: "130",
        height: "200"
      },
      {
        link: "http://ads.farakav.com/clk?av=L_YN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=2",
        image_src: "https://static.farakav.com/v3/static/bpx/00910872.gif",
        width: "130",
        height: "400"
      },
      {
        link: "http://ads.farakav.com/clk?av=L_YN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=3",
        image_src: "https://static.farakav.com/v3/static/bpx/00910854.jpg",
        width: "130",
        height: "400"
      },
      {
        link: "http://ads.farakav.com/clk?av=L_YN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=4",
        image_src: "https://static.farakav.com/v3/static/bpx/00910862.gif",
        width: "130",
        height: "400"
      },
      {
        link: "http://ads.farakav.com/clk?av=L_YN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=5",
        image_src: "https://static.farakav.com/v3/static/bpx/00910865.gif",
        width: "130",
        height: "200"
      }
    ];


    const AdArgs1 = [
      {
        link: "http://ads.farakav.com/clk?av=MeYN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=0",
        image_src: "https://static.farakav.com/v3/static/bpx/00910897.gif",
        width: "257",
        height: "80"
      },
      {
        link: "http://ads.farakav.com/clk?av=MeYN&amp;gl=cfcd208495d565ef66e7dff9f98764da&amp;lc=1",
        image_src: "https://static.farakav.com/v3/static/bpx/00910837.gif",
        width: "257",
        height: "80"
      }
    ];


    const AdArg1 = {
      link: "https://click-ads.farakav.com/clk-eaa64abd-8a0e-4bd2-9553-6a7f19a3a0b7",
      image_src: "https://static-ads.farakav.com/MDY4YzVlMjAtMGY0Yy00MTBlLTg0NDktZGZkZThiYjBiNTlm/29597f9170cd428a92786d7becc181e3.gif",
      width: "",
      height: ""
    }

    const AdArg2 = {
      link: "http://ads.farakav.com/clk?av=LOYN&amp;gl=8b9ed12c82ff7dec1d47565f5d243e9f&amp;lc=0",
      image_src: "https://static.farakav.com/v3/static/bpx/00910892.gif",
      width: "257",
      height: "80"
    }

    const AdArg3 = {
      link: "https://ck.yektanet.com/b/click?impression=V9deXux7ahpvLnd4ejg6gHhS4k1P4q%2FZ3ltbq1DGagvkZaP7fd9ceRKxIVUvlTKBiWGJbzTsoKEMLUtLHCYO%2BT9G2ZiVaMynSReItPPCRNg7AtfDXyFCOGORtz9oQNlszA%2BFDlhRf5Sp2j2VIMuFhEfiRldvuEVEFr6RBDkTzoQYvTEtjOMQ7olk7ltSGhR3sye1Vw8rhFx2DxvCCw4r9KC9%2FM2WwA6t9hLsAPkCLkd69NaPD0TfgCotFTS37Hw%2BNYtCFHFsvqr0RdtyX7HrVxeZ%2F60O585zkg9abd1UPfdEEQeNP3%2BqLNE7glP%2B95pvt8ulMZtQhLPPLsNz%2Fp8EdnKNJ1ks0KCTp6NxWzT0N5bAEpKiNnc115LFCKeUrN4DW9BU%2Fas2o7TFTMZzW%2B9cKh6CNluMeTf1ZKKKnPEZlRmj96VwgY1IQb9eUtePClrsYT7j6aiLgJ60H%2FWxFvK%2Byw%3D%3D%3Ab9DXlDM1DveEpEmRNRa6RVdK%2FknHzUt6p3hA8ByRxJnmZ0QvhT95dC%2ByZswck7K7rVRgMaauZ%2FiXjYRHyj0pFLmE%2BPMXyw2QgM%2BZm6fMEkKS61%2Fg%2FtmjBYu4nP3TW1lLnFO9739w69%2FMiKtDn7IgnOZunNSgtTgdlEZPaocTLTnOzVMVnnXiwuVTIZ9xmxhTZm5gXr4kN4ZaMXwGBlItldeIX2luNHV7lf5%2FNBEfgPisID0lgYWTdrGu%2FMIYjL0y0aBAXnC86H%2BbYuL83FGwI1Dc%2BSQbjBTSX8HiLF%2F4QcPOCFdG%2Fwbzrepw0gd38bNRGyklSgRpPsgxve3qxV4qfQ%3D%3D&redirect=http%3A%2F%2Fsnappfood.ir",
      image_src: "https://mostatil.yektanet.com/media/images/6T/59z/1875ea113a66493fb34bb261cae35aa3.gif",
      width: "300",
      height: "auto"
    }


    const tableArg = {
      header: {
        class: "header color-1",
        colspan: "10",
        title: "نیمه نهایی"
      },

      subHeader: {
        class: "sub-header",
        colspan: "10",
        title: "سه‌شنبه 21 خرداد 1398"
      }
    }


    var fakeNewsList = [];
    for (var i = 0; i < 100; i++) {
      fakeNewsList.push(
        <a target="_blank" class="small-news-link" href="/video/Qbj0G">این یک خبر فیک است برای تست {i}</a>
      );
    }

    const fakeNews = fakeNewsList.map(
      (fakeNews) => <li data-filter="8" class="news-video">{fakeNews}</li>
    );

    //const fakeNewsa = '<div class="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside" tabindex="0"><div class="mCSB_container"dir="rtl"><ul class="news-list--listed-news">' + fakeNews + '</ul></div></div>';

    const ColFootballNews = {
      header: "اخبار فوتبال",
      toolbar: "",
      content: fakeNews,
      footer: ""
    }

    const ColFootballNews1 = {
      header: "آخرین اخبار سایر ورزش‌ها",
      toolbar: "",
      content: fakeNews,
      footer: ""
    }

    const ColTable = {
      header: "کوپا آمریکا 2019",
      toolbar: "",
      content: <MyTable Args= {tableArg}/>,
      footer: ""
    }

    const ColVideo = {
      header: "ویدیو",
      toolbar: "",
      content: <ImageSliderSmall src= {"https://static.farakav.com/files/pictures/01410695.jpg"} />,
      footer: ""
    }
    const ColGishe = {
      header: "گیشه روزنامه ورزشی",
      toolbar: "",
      content: <ImageSliderSmall src= {"https://static.farakav.com/files/pictures/01410696.jpg"} />,
      footer: ""
    }

    const listAd = AdArgs.map((Arg) => <Ads Args= {Arg}/> );
    const listAd1 = AdArgs1.map((Arg) => <Ads Args= {Arg}/> );

    return (

      <Fragment>
        <Header />

        <div class="page-content">
          <div class="center-container">

            <div class="page-content-column pull-right">
              <div class="row">
                <div class="col-xs-12 col-sm-8 pull-right home-column main-first-column">
                  <div class="row-fluid home-column wide-content-wrapper">
                    <ImageSlider />
                  </div>
                  <div class="row no-margin-side">

                    <div class="col-xs-12 col-sm-6 pull-right no-padding-right home-column first-column">

                      <div class="ad-container row-fluid" data-adposition="14">
                        {listAd1}
                        <Col Args= {ColTable}/>
                        <Col Args= {ColFootballNews1}/>
                        <Col Args= {ColTable}/>
                      </div>

                    </div>



                    <div class="col-xs-12 col-sm-6 pull-right no-padding-left home-column second-column">

                      <div class="ad-container row-fluid" data-adposition="14">
                        <Ads Args= {AdArg2}/>
                        <Col Args= {ColVideo}/>
                        <Ads Args= {AdArg3}/>
                        <Col Args= {ColGishe}/>
                        <Col Args= {ColTable}/>
                        <Col Args= {ColTable}/>
                        <Col Args= {ColTable}/>
                        <Col Args= {ColTable}/>

                      </div>
                    </div>


                  </div>
                </div>

                <div class="col-xs-12 col-sm-4 pull-right home-column third-column">
                  <Ads Args= {AdArg1}/>
                  <Col Args= {ColFootballNews}/>
                  <Col Args= {ColTable}/>


                </div>
              </div>
            </div>


            <div class="page-content-ads">
              <div class="ad-container row-fluid" data-adposition="6">
                {listAd}
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </Fragment>
    );




    return (
    {/* <br/>

     <input type="number" onChange={(event) => this.counterChangeOnChangeEvent(event)}/>
     <br/>
     <br/>
     <button onClick={() => this.counterInc()}>Inc</button>
     <span id="counter">{this.state.counter}</span>
     <button onClick={() => this.counterDec()}>Dec</button> */}
    );

    // const list = this.props.items.map((item, i) => {
    //   return (
    //     <p>
    //       <li key={i}> {item.value} </li>
    //     </p>
    //   )
    // });

    // return (
    //   <React.Fragment>
    //     <input onKeyUp={this.addItem.bind(this)} />
    //     <p>
    //       <ul>{list}</ul>
    //     </p>
    //   </React.Fragment>
    // );
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(App);
