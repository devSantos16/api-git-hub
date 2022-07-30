import React from "react";

const ContainerItem = (props) => {
    let {children} = props;
    return (
        <div className="container-section">
            {children}
        </div>
    )
}

export default ContainerItem;