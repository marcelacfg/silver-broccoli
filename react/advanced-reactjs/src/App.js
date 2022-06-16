import { Component } from "react";
import Twitter from "./Twitter";

class App extends Component {
  state = {
    loading: false,
    actived: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  onRemove = () => {
    this.setState({ actived: false });
  };

  render() {
    const posts = [
      {
        title: "Twotter1",
        description: "foo",
      },
      {
        title: "Twotter2",
        description: "foo bar",
      },
      {
        title: "Twotter3",
        description: "foo fighters",
      },
    ];

    return (
      <div>
        <p>Testes</p>
        <button onClick={this.onRemove}>Remover component</button>
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    );
  }
}

export default App;
