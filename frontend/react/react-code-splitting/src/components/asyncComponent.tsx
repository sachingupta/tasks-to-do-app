import React, { Component } from "react";

export function asyncComponent(importComponent: any) {
  class AsyncComponent extends Component {
    constructor(props: any) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = (this.state as any).component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

/*
1. The asyncComponent function takes an argument; a function (importComponent)
 that when called will dynamically import a given component. 
 This will make more sense below when we use asyncComponent.
2. On componentDidMount, we simply call the importComponent function that is passed in. 
And save the dynamically loaded component in the state.
3. Finally, we conditionally render the component if it has completed loading. 
If not we simply render null. But instead of rendering null, you could render a loading spinner. 
This would give the user some feedback while a part of your app is still loading. */