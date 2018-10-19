import React, { Component } from "react";
import "./news.css";

class News extends Component {
  render() {
    return (
      <div id="news">
        <h6>New York Times</h6>
        <a href="https://www.nytimes.com/2018/10/15/us/politics/trump-saudi-king-journalist-khashoggi.html?action=click&module=Top%20Stories&pgtype=Homepage">
          <p>
          Trump Says ‘Rogue Killers’ May...
          </p>
        </a>
        <a href="https://www.nytimes.com/2018/10/15/technology/myanmar-facebook-genocide.html?rref=collection%2Fsectioncollection%2Fbusiness&action=click&contentCollection=business&region=rank&module=package&version=highlights&contentPlacement=1&pgtype=sectionfront">
          <p>
          A Genocide Incited on Facebook...
          </p>
        </a>
        <a href="https://www.nytimes.com/2018/10/14/business/economy/stock-market-earnings-season.html">
          <p>
          Wall St. Pins Hopes on Strong...
          </p>
        </a>
        <a href="https://www.nytimes.com/2018/10/04/fashion/mens-style/hiking-boots-fashion.html?rref=collection%2Fsectioncollection%2Fmens-style&action=click&contentCollection=mens-style&region=rank&module=package&version=highlights&contentPlacement=4&pgtype=sectionfront">
          <p>
          Take a Hike With Fall’s Hottest...
          </p>
        </a>
        <a href="https://www.nytimes.com/2018/10/05/dining/instant-pot-indian.html?rref=collection%2Fsectioncollection%2Ffood&action=click&contentCollection=dining&region=rank&module=package&version=highlights&contentPlacement=9&pgtype=sectionfront">
          <p>
          Indian Cooks Embrace the Instant...
          </p>
        </a>
      </div>
    );
  }
}

export default News;