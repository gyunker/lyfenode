import React, { Component } from "react";
import "./sports.css";

const SportEventRow = ({ homeTeam, awayTeam, strHomeTeam, strAwayTeam, intHomeScore, intAwayScore }) => {
  return (
    <div className="sport-row">
      <div className="row">
        <div className="col-sm-9">{homeTeam ? <img width="24" alt={homeTeam.strTeam} src={homeTeam.strTeamBadge} /> : ''}{strHomeTeam}</div>
        <div className="col-sm-3">{intHomeScore}</div>
      </div>

      <div className="row">
        <div className="col-sm-9">{awayTeam ? <img width="24" alt={awayTeam.strTeam} src={awayTeam.strTeamBadge} /> : ''}{strAwayTeam}</div>
        <div className="col-sm-3">{intAwayScore}</div>
      </div>
    </div>
  );
}

class Sports extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      events: [],
      teams: {}
    };
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  componentDidMount() {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4328`)
      .then(res => res.json())
      .then(data => {
        const events = data.events.slice(0, 5);

        const teamIds = Array.from(new Set(events.map(event => ([ event.idHomeTeam, event.idAwayTeam ])).reduce((acc, val) => acc = acc.concat([...val]), [])));
        const teamPromises = teamIds.map(teamId => {
          return fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => data.teams[0]);
        });

        Promise.all(teamPromises).then(teams => {
          const teamsMap = {}
          for (const team of teams) {
            teamsMap[team.idTeam] = team;
          }

          if (!this.unmount) {
            this.setState({
              isLoading: false,
              events,
              teams: teamsMap
            });
          }
        })
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
      <div id="sports">
        <h6>Loading...</h6>
      </div>
    );
  }

  renderLoaded() {
    return (
      <div id="sports">
        <h6>Sports</h6>
        <div className="box">
          {this.state.events.map(event => <SportEventRow key={event.idEvent} homeTeam={this.state.teams[event.idHomeTeam]} awayTeam={this.state.teams[event.idAwayTeam]} {...event} />)}
        </div>
      </div>
    );
  }
}

export default Sports;
