import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
          <p className="text-lg font-bold text-[#064A91]">Something went wrong.</p>
          <a href="/" className="btn btn-primary" data-testid="error-boundary-home-link">Back to Home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
