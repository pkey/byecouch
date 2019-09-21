import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: any = ({ text }: any) => <div>{text}</div>;

class ActivityMap extends Component {
    static defaultProps: any = {
        center: {
            lat: 54.687157,
            lng: 25.279652
        },
        zoom: 14
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100vh'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDzPEtqIe-1ArlBZRdmFQfGEKZr1f6HwrQ' }}
                    defaultCenter={{lat: 54.687157, lng: 25.279652}}
                    defaultZoom={14}
                >
                    <AnyReactComponent
                        lat={54.687157}
                        lng={25.279652}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default ActivityMap;