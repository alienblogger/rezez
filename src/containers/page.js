import { h, Component } from "preact";
import Header from "./header.js";
import Panels from "./panels.js";
import Panel from "../components/panel.js";

class Page extends Component {
  state = {
    panels: [
      {
        id: 1,
        title: "Education",
        subtitle: "Institute",
        info: "Year of Graduation"
      },
      {
        id: 2,
        title: "Strengths",
        subtitle: "What makes you worthy?",
        info: null
      }
    ]
  };
  render({ name }, { panels }) {
    let panelsList = panels.map((item, index) =>
      <Panel
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        info={item.info}
      />
    );
    return (
      <div className="page">
        <Header label={name} />
        <Panels>
          {panelsList}
        </Panels>
      </div>
    );
  }
}

export default Page;
