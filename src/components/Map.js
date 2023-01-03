import { Map, Marker } from "pigeon-maps";

const MyMap = (props) => {
  console.log(props.address.geo)
  return (
    <Map height={300} defaultCenter={[parseFloat(props.address.geo.lng), parseFloat(props.address.geo.lat)]} defaultZoom={11}>
      <Marker width={50} anchor={[parseFloat(props.address.geo.lng), parseFloat(props.address.geo.lat)]} />
    </Map>
  );
};

export default MyMap;
