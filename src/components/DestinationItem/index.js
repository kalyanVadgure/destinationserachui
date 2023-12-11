import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {imgUrl, name} = destination

  return (
    <li className="destination_container">
      <img className="destination_image" src={imgUrl} alt={name} />
      <p className="destination_name">{name}</p>
    </li>
  )
}

export default DestinationItem
