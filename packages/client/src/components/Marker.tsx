import React from 'react';
import '../assests/css/Marker.css'
import { Tooltip } from "antd";

const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
        <Tooltip title={name}>
            <div className="marker"
                 style={{ backgroundColor: color, cursor: 'pointer'}}
                 title={name}>
            </div>
        </Tooltip>
);
};

export default Marker;