import React from "react";

const Section = (props) => {
    let {children} = props;
    return (
        <div className="section">
            {children}
        </div>
    )
}

export default Section;