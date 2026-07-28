import React from "react";

const withLoading = (WrappedComponent) => {
  return function EnhancedComponent({ loading, ...props }) {
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withLoading;