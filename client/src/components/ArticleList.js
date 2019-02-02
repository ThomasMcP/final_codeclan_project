import React, {Component, Fragment} from 'react';
import Article from './Article.js';

class ArticleList extends Component {

  render() {
    const articleArray = this.props.articles.map((article) => {
      return(
        <Article key={article.id} article={article} />
      )
    });
    return (
      <Fragment>
        <h2>Articles</h2>
        <div className="articlelist">
          {articleArray}
        </div>
      </Fragment>
    )
  }
};

export default ArticleList;