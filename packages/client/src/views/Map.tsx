import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import { MapProps } from "../types/types";
import { Icon } from "antd";
import Marker from "../components/Marker";

const AnyReactComponent: any = ({ text }: any) => <div><Icon style={{fontSize:'20px'}} type="pushpin" />{text}</div>;

class ActivityMap extends Component<MapProps> {
    static defaultProps: MapProps= {
        center: {
            lat: 54.687157,
            lng: 25.279652
        },
        zoom: 14,
        markers: [
            {lat: "54.687157" , lng: "25.279652", activityTitle: 'Activity title'}
        ]
    };

    render() {
        const displayedMarkers = [];

        for(const value of this.props.markers? this.props.markers : []) {
            displayedMarkers.push(<Marker id={value.id} key={value.id} lat={value.lat} lng={value.lng} name={value.activityTitle} color={value.color}/>);
        }

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "calc(100vh - 68px)", width: '100vh'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB-1JgX4yKF6F7uukm_co468kH3JUSY3Pw' }}
                    defaultCenter={{lat: this.props.center.lat, lng: this.props.center.lng}}
                    defaultZoom={this.props.zoom}
                >
                    {displayedMarkers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default ActivityMap;