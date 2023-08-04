import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const Mapa = () => {

  const departamentos = useSelector(state => state.departamentos.departamentos)
  const personas = useSelector(state => state.personas.personas)


  return (
    <div>

      <MapContainer center={[-32.522779, -55.765835]} zoom={6} scrollWheelZoom={true} style={{ height: '300px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {departamentos.map(dep => {
          let personasDep = 0;
          personas.map(p => {
            if (p.departamento === dep.id) {
              personasDep++;
            }
          })
          return (<Marker key={dep['id']} position={[dep['latitud'], dep['longitud']]}>
            <Popup>
              Personas censadas en este departamento: {personasDep}
            </Popup>
          </Marker>)
        }
        )}
      </MapContainer>
    </div>
  )
}

export default Mapa