import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';
import { MapProps } from "../types/types";

const AnyReactComponent: any = ({ text }: any) => <div>{text}</div>;

class ActivityMap extends Component<MapProps> {
    static defaultProps: MapProps= {
        center: {
            lat: 54.687157,
            lng: 25.279652
        },
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "calc(100vh - 68px)", width: '100vh'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDzPEtqIe-1ArlBZRdmFQfGEKZr1f6HwrQ' }}
                    defaultCenter={{lat: this.props.center.lat, lng: this.props.center.lng}}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default ActivityMap;