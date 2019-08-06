import React from 'react'



const withPlayers = (WrappedComponent) => {

  return class extends React.Component {
    state = {
      isLoading: true,
      players: [],
      error: null,
    }

    fetchPlayers() {
      fetch(`https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json`)
        .then(response => response.json())
        .then(
          data =>
            this.setState({
              data: {...data},
              isLoading: false,
            })
        )
        .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.fetchPlayers()
    }
    render(){
      return (
        <WrappedComponent data={this.state.data} isLoading={this.state.isLoading} {...this.props}/>
      )
    }
  }
}

export default withPlayers
