import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
 state = { hasError: false, redirect: false };

 static getDerivedStateFromError() {
  return { hasError: true };
 }

 componentDidCatch(error, info) {
  if (this.state.hasError) {
   setTimeout(() => this.setState({ redirect: true }), 5000);
  }
  console.log("ErrorBoundary caught an error", error, info);
 }

 render() {
  if (this.state.redirect) {
   return <Redirect to="/" />;
  } else if (this.state.hasError) {
   return (
    <h2>
     This listing has an error. <Link to="/">Click here</Link> to go back to the
     home pages or wait for 5 seconds.
    </h2>
   );
  }
  return this.props.children;
 }
}

export default ErrorBoundary;
