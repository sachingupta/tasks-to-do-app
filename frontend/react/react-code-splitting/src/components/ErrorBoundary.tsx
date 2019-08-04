import React from 'react';
/*
To detect and handle lazy-loading failures, 
you can wrap your Suspense component with a parent components that serves as an error boundary.
Inside the error boundary's render() method, you can render the children as-is if there's no error, 
or render a custom error message if something goes wrong: */

export class ErrorBoundary extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {hasError: false};
    }
  
    static getDerivedStateFromError(error: any) {
      return {hasError: true};
    }
  
    render() {
      if ((this.state as any).hasError) {
        return <p>Loading failed! Please reload.</p>;
      }
  
      return this.props.children;
    }
  }