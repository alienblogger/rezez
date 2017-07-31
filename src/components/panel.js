import { h, Component } from "preact";
import TextBox from "./text.js";

class Panel extends Component {
  state = {
    panels: [
      {
        id: 0,
        subtitle: this.props.subtitle,
        info: this.props.info
      }
    ]
  };

  addPanel = () => {
    let panels = this.state.panels;
    panels = [
      ...this.state.panels,
      {
        id: this.state.panels.length,
        subtitle: this.props.subtitle,
        info: this.props.info
      }
    ];
    this.setState({ panels });
  };

  removePanel = id => {
    let panels = this.state.panels.slice();
    panels.splice(id, 1);
    this.setState({
      panels
    });
  };

  render({ title, subtitle, info, count }, { panels }) {
    let panelList = panels.map((item, index) => {
      console.log(index);
      return (
        <div key={item.id} className="panel-sub">
          <div className="editable">
            <TextBox value={subtitle} locked="false" />
            <TextBox value={info} locked="false" />
          </div>
          <div className="buttons">
            <div
              className="button"
              onClick={() => {
                this.removePanel(index);
              }}
            >
              &times;
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="panel">
        <div className="panel-title">
          <TextBox value={title} locked="true" />
          <div className="button" onClick={this.addPanel}>
            +
          </div>
        </div>
        <div className="panel-body">
          {panelList}
        </div>
      </div>
    );
  }
}

export default Panel;
