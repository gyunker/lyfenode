import React, { Component } from "react";
import "./news.css";

const ArticleRow = ({title, url, urlToImage, sources }) => {
  return (
    <div className="row article-row">
        <div className="col-sm-3">
          <img width="150" alt={sources} src={urlToImage} id="articleImage"/>
        </div>
        <div className="col-sm-9">
          {/* <div className="row-sm-3" id="articleSource">
            {sources}
          </div> */}
          <div className="row-sm-6" id="articleTitle">
            <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          </div>
          <div className="row-sm-3" id="articleDescription">
          </div>
        </div>
  </div>
  );
}

const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'pageSize=4&' +
          'apiKey=df5a2b75a8894969ae0159a6d43fa41c';

  
class News extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const news = Object.values(data)
        const articles = news[2];
        console.log(articles)

        this.setState({
          isLoading: false,
          articles
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          err
        });
      });
  }

  render() {
    return this.state.isLoading ? this.renderLoading() : this.renderLoaded();

  }

  renderLoading() {
    return (
      <div id="news">
        Loading...
      </div>
    );
  }

  renderLoaded() {
    return (
      <div id="news">
        <h6>News</h6>
        <div className="box">
         {this.state.articles.map(article => <ArticleRow key={this.state.articles.url} title={this.state.articles.title} url={this.state.articles.urlToImage} sources={this.state.articles.publishedAt} {...article} />)}
       </div>    
      </div>
     );
     }
}

export default News;