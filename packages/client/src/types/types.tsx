export interface MapProps {
    center: { lat: number, lng: number }
    zoom: number
    markers?: [
        {lat: number, lng: number, activityTitle?: string, id?: any}
    ]
}