import React from 'react';
import '../assests/css/Marker.css'
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
        <Tooltip title={name}>
            <NavLink to={`activity/${id}`}>
            <div className="marker"
                 style={{ backgroundColor: color, cursor: 'pointer'}}
                 title={name}>
            </div>
            </NavLink>
        </Tooltip>
);
};

export default Marker;