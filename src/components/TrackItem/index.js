import {RiDeleteBin4Line} from 'react-icons/ri'

import './index.css'

const TrackItem = props => {
  const {item, onDelete} = props
  const {imageUrl, name, genre, duration, id} = item
  const clickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="item">
      <img src={imageUrl} alt="track" className="track-image" />
      <div className="info-container">
        <div className="perfect-pop">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <div className="time-delete-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="btn"
            testid="delete"
            onClick={clickDelete}
          >
            <RiDeleteBin4Line color="#ffffff" size="19" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default TrackItem
