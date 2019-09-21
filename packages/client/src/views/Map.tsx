import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent: any = ({ text }: any) => <div>{text}</div>;

class ActivityMap extends Component {
    static defaultProps: any = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDzPEtqIe-1ArlBZRdmFQfGEKZr1f6HwrQ' }}
                    defaultCenter={{lat: 59, lng: 30.33}}
                    defaultZoom={11}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default ActivityMap;