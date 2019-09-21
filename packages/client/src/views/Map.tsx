import React, { Component } from 'react';
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent: any = ({ text }: any) => <div>{text}</div>;

const OnlyMobile = styled.div`
@media screen and (max-device-width: 760px){
    display: none;
    height: calc(100vh - 68px);
    width: 100vh;
  }
`

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
            <OnlyMobile style={{ }}>
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
            </OnlyMobile>
        );
    }
}

export default ActivityMap;