import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import { MapProps } from "../types/types";
import { Icon } from "antd";
import Marker from "../components/Marker";

const AnyReactComponent: any = ({ text }: any) => <div><Icon style={{fontSize:'20px'}} type="pushpin" />{text}</div>;

class ActivityMap extends Component<MapProps> {


    render() {
        console.log('locations => ',this.props.locations);
        const displayedMarkers = [];

        for(const value of this.props.markers? this.props.markers : []) {
                displayedMarkers.push(<Marker id={value.id} key={value.id} lat={value.lat} lng={value.lng}
                                              name={value.activityTitle} color={value.color}/>);
        }
        let index = 100;

        for(const locationItem of this.props.locations? this.props.locations : []) {
            index++;
            displayedMarkers.push(<Marker id={index} key={index} lat={locationItem.latitude} lng={locationItem.longitude} name={locationItem.name} location={true} color={"black"}/>);
        }

        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "calc(100vh - 68px)", width: '100vh'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB-1JgX4yKF6F7uukm_co468kH3JUSY3Pw' }}
                    // @ts-ignore
                    // defaultCenter={this.props.center}
                    center={this.props.center}
                    defaultZoom={14}
                >
                    {displayedMarkers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default ActivityMap;