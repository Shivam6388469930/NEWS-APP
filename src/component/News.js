import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner.js'
import InfiniteScroll from 'react-infinite-scroll-component';


// import PropTypes from 'prop-types'


export class News extends Component {
  // static defaultProptype={
  //   pagesize:5,
  //   categry:sport

  // }
  // static PropTypes={
  //   pagesize:PropTypes.string,
  //   categry:PropTypes.string
  // }

  articles = [
    {
      "source": {
        "id": "polygon",
        "name": "Polygon"
      },
      "author": "Oli Welsh",
      "title": "",
      "description": "The first batch of new Game Pass games for July 2024 includes several indie favorites like Neon White and Tchia, as well as Cricket 24",
      "url": "https://www.polygon.com/24190770/game-pass-july-2024-free-xbox-games-case-of-the-golden-idol-tchia-neon-white-flock",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Zoc7c7NvPhp3QpOUwsky70QU3zM=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24265929/goldenidol.jpeg",
      "publishedAt": "2024-07-02T17:43:15Z",
      "content": "Microsoft has revealed whats coming to Game Pass during the first half of July and, while absent any big-hitters, the lineup features at least four really excellent indie games that will be well wort… [+2126 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "CB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "hat we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
      "source": {
        "id": "polygon",
        "name": "Polygon"
      },
      "author": "Oli Welsh",
      "title": "Game Pass July 2024 update adds Flock, The Case of the Golden Idol",
      "description": "The first batch of new Game Pass games for July 2024 includes several indie favorites like Neon White and Tchia, as well as Cricket 24",
      "url": "https://www.polygon.com/24190770/game-pass-july-2024-free-xbox-games-case-of-the-golden-idol-tchia-neon-white-flock",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/Zoc7c7NvPhp3QpOUwsky70QU3zM=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24265929/goldenidol.jpeg",
      "publishedAt": "2024-07-02T17:43:15Z",
      "content": "Microsoft has revealed whats coming to Game Pass during the first half of July and, while absent any big-hitters, the lineup features at least four really excellent indie games that will be well wort… [+2126 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super();
    console.log("hello i am consuct")
    this.state = {
      page: 1,
      articles: this.articles,
      loading: false,
      totalResults: 0

    }
  }
  // fetch initial first page data of use api

  update = async () => {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categry}&apiKey=ab15211152df4d6398900ef336c42f8e&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`

    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults

    })
    this.props.setProgress(100)
    

  }


  
  // go to first page

  async componentDidMount() {
    this.update()
  }
// fetching more data 

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categry}&apiKey=ab15211152df4d6398900ef336c42f8e&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`

    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults

    })
  };
  render() {
    return (
      <>
        <div className="container my-3 mt-5 ">
          <h1>News-Wala -Top Heading on { this.props.categry }</h1>
          
          {/* adding infinite scroll */}

          <InfiniteScroll
            dataLength={ this.state.articles.length }
            next={ this.fetchMoreData }
            hasMore={ this.state.articles.length != this.articles.totalResults }
            loader={ <Spinner  /> }
          >
            <div className="container">
              <div className="row" >
                {/* Rendering news item */}

                { this.state.articles.map((element) =>

                  <div className="col-md-4 mb-20 " key={ element.title }>
                    <Newsitem title={ element.title ? element.title : "title is not found" } description={ element.description ? element.description : "description is not found " } urlToImage={ element.urlToImage ? element.urlToImage : "Image cannot load" } url={ element.url } author={ element.author } date={ element.publishedAt } source={ element.source.name } />
                  </div>
                ) }

              </div>
            </div>
          </InfiniteScroll>

        </div>
      

      </>
    )
  }
}


export default News