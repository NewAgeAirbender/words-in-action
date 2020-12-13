import React from "react";

const themeButton = props => (
    <div className="button">
        <a onClick={() => props.selectTheme(props.name)} >{props.name}</a>
    </div>
);

export default themeButton();