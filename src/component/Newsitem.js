
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, urlToImage, url, author, date, source} = this.props
    
    // Format date if it exists
    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }) : 'Date not available'
    
    return (
      <div className="col mb-4">
        <div className="card h-100 shadow-sm border-0 hover-shadow">
          {/* Image Container */}
          <div className="position-relative">
            <img 
              src={!urlToImage ? 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' : urlToImage}
              className="card-img-top" 
              alt={title || "News image"}
              style={{ height: '200px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
              }}
            />
            
            {/* Source Badge */}
            <span className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-danger bg-gradient">
                {source || 'Unknown'}
              </span>
            </span>
          </div>
          
          {/* Card Body */}
          <div className="card-body d-flex flex-column">
            {/* Title */}
            <h5 className="card-title fw-bold mb-3">
              {title ? (title.length > 70 ? title.substring(0, 70) + '...' : title) : 'No title available'}
            </h5>
            
            {/* Description */}
            <p className="card-text text-muted mb-4 flex-grow-1">
              {description ? 
                (description.length > 120 ? description.substring(0, 120) + '...' : description) 
                : 'No description available. Click Read More to view the full article.'}
            </p>
            
            {/* Metadata */}
            <div className="mt-auto">
              <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
                <div className="author-info">
                  <i className="bi bi-person-circle me-1"></i>
                  <span>{author ? (author.length > 20 ? author.substring(0, 20) + '...' : author) : 'Unknown Author'}</span>
                </div>
                <div className="date-info">
                  <i className="bi bi-calendar3 me-1"></i>
                  <span>{formattedDate}</span>
                </div>
              </div>
              
              {/* Read More Button */}
              <div className="d-grid">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm btn-gradient rounded-pill"
                >
                  <i className="bi bi-newspaper me-2"></i>
                  Read Full Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem