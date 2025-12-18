import { Map, Marker } from "pigeon-maps";

const MapSection = () => {
  const location = [35.821053, 50.948518];
  return (
    <div className="w-full h-auto overflow-hidden rounded-4xl">
      <Map defaultCenter={location} defaultZoom={14} height={400}>
        <Marker width={50} anchor={location} />
      </Map>
    </div>
  );
};

export default MapSection;
