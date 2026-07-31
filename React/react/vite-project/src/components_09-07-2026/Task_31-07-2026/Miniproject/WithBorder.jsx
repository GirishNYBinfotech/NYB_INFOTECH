import React from "react";

const withBorder = (Component) => {

    return function Enhanced(props) {

        return (
            <div
                style={{
                    border: "3px solid blue",
                    padding: "20px",
                    margin: "20px"
                }}
            >
                <Component {...props} />
            </div>
        );

    };

};

export default withBorder;