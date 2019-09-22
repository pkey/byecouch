import React from 'react';
import '../assests/css/Marker.css'
import { Tooltip } from "antd";
import { NavLink } from "react-router-dom";

const Marker = (props: any) => {
    const { color, name, id, location } = props;
    return (
        <Tooltip title={name}>
            <NavLink to={`activity/${id}`}>
                {location ? (
                    <div className="marker"
                         style={{ backgroundColor: "black", cursor: 'pointer', width: '25px', height: '25px'}}
                         title={name}>
                    </div>
                ): (
                    <div className="marker"
                         style={{ backgroundColor: color, cursor: 'pointer'}}
                         title={name}>
                    </div>
                )}
            </NavLink>
        </Tooltip>
);
};

export default Marker;