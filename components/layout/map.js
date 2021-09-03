import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import classes from "./map.module.css";

function MapBegining() {
  return (
    <div>
      <GoogleMap
        defaultZoom={100}
        defaultCenter={{ lat: 10.619437, lng: 76.199327 }}
      />
    </div>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(MapBegining));

export default function Map() {
  return (
    <div className={classes.mapcontainer}>
      <WrappedMap
        className={classes.wrappedmap}
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={
          <div className={classes.loadingelement} style={{ height: "100%" }} />
        }
        containerElement={
          <div
            className={classes.containerelement}
            style={{ height: "100%" }}
          />
        }
        mapElement={
          <div className={classes.mapelement} style={{ height: "100%" }} />
        }
      />
    </div>
  );
}
