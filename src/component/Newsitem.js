import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,urlToImage,url,author,date,source}=this.props
    return (   
      <div className='container'>
         <div className="card" style={{width:"18rem"}}>
            <img src={!urlToImage?'src/component/spotify.jpg':urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title+"...."}</h5>
                <p className="card-text">{description+"......" }</p>
                <p className="card-text"><small className="text-body-secondary">{"Source-"+ source}</small></p>
                <p className="card-text"><small className="text-body-secondary">{"By-"+author+" on " + date}</small></p>
                <a href={url}  className="btn-primary ">Read More</a>

            </div>
         </div>
      </div>
    
    )
  }
}

export default Newsitem
