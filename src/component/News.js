
import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
      hasMore: true,
      error: null,
      search: ""
    }
  }

  // Capitalize category
  formatCategoryName = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  // Build API URL
  buildUrl = (page) => {
    const { apiKey, pagesize, categry } = this.props
    const { search } = this.state

    if (search.trim()) {
      return`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categry}&apiKey=ab15211152df4d6398900ef336c42f8e&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
    }

    return `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.categry}&apiKey=ab15211152df4d6398900ef336c42f8e&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`
  }

  // Fetch initial / search data
  fetchNews = async () => {
    try {
      this.setState({ loading: true, error: null })

      const url = this.buildUrl(1)
      const res = await fetch(url)
      const data = await res.json()

      this.setState({
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
        page: 1,
        loading: false,
        hasMore: (data.articles || []).length > 0
      })
    } catch (err) {
      this.setState({ loading: false, error: err.message })
    }
  }

  componentDidMount() {
    this.fetchNews()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categry !== this.props.categry) {
      this.setState({ search: "" }, this.fetchNews)
    }
  }

  // Infinite scroll
  fetchMoreData = async () => {
    const nextPage = this.state.page + 1
    const url = this.buildUrl(nextPage)

    const res = await fetch(url)
    const data = await res.json()

    this.setState({
      articles: [...this.state.articles, ...(data.articles || [])],
      page: nextPage,
      hasMore: this.state.articles.length < data.totalResults
    })
  }

  // Search handlers
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault()
    this.fetchNews()
  }

  render() {
    const { articles, loading, error, hasMore, search } = this.state
    const categoryName = this.formatCategoryName(this.props.categry)

    return (
      <div className="container mt-5 pt-4">

        {/* HEADER */}
        <div className="card border-0 bg-light shadow-sm mb-4" >
          <div className="card-body text-center">
            <h1 className="fw-bold text-primary">News-Wala</h1>
            <h5 className="text-muted">
              Top {categoryName} Headlines from US
            </h5>
            {!loading && !error && (
              <p className="text-muted">
                Showing {articles.length} of {this.state.totalResults}
              </p>
            )}
          </div>
        </div>

        {/* SEARCH */}
        <form className="d-flex mb-4" onSubmit={this.handleSearchSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search news..."
            value={search}
            onChange={this.handleSearchChange}
          />
          <button className="btn btn-primary">Search</button>
        </form>

        {error && <div className="alert alert-danger">{error}</div>}
        {loading && articles.length === 0 && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={this.fetchMoreData}
          hasMore={hasMore}
          loader={<Spinner />}
          endMessage={
            <p className="text-center text-muted mt-4">
              You are all caught up 👍
            </p>
          }
        >
          <div className="row">
            {articles.map((el, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <Newsitem
                  title={el.title || "No title"}
                  description={el.description || "No description"}
                  urlToImage={el.urlToImage || "https://via.placeholder.com/300"}
                  url={el.url}
                  author={el.author}
                  date={el.publishedAt}
                  source={el.source?.name || "Unknown"}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>

      </div>
    )
  }
}

export default News
