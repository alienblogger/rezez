import { h, Component } from "preact";
import { route } from "preact-router";
import linkState from "linkstate";

class Home extends Component {
  handleClick = () => {
    route("/create/" + this.state.name);
  };
  render({}, { name }) {
    return (
      <div className="home-view">
        <div className="header-image">
          <div className="title-bar">
            <h2 id="app-name">Rezez</h2>
            <h4>
              resume builder by
              <a target="_blank" href="https://alienblogger.github.io/profile">
                {" "}AlienBlogger
              </a>
            </h4>
          </div>
          <input
            id="name"
            placeholder="Enter Your Name "
            onInput={linkState(this, "name")}
          />
          <div onClick={this.handleClick} className="button">
            Create Resume
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-image">
              <i className="im im-globe" />
            </div>
            <div className="card-label">Online</div>
          </div>
          <div className="card">
            <div className="card-image">
              <i className="im im-gear" />
            </div>
            <div className="card-label">Simple</div>
          </div>
          <div className="card">
            <div className="card-image">
              <i className="im im-coin" />
            </div>
            <div className="card-label">Free</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
