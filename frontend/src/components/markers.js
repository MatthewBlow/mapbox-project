import RoomIcon from '@mui/icons-material/Room';

const Marker = (props) => {
    return(
        <Marker 
          latitude={props.lat}
          longitude={props.long}
          key={props._id}
          >
           <RoomIcon 
           style={props.style}
           onClick={props.onClick}
           />
        </Marker>
    )
}

export default Marker