import {Component} from 'react'

import {BiSearch} from 'react-icons/bi'
import TrackItem from '../TrackItem'
import './index.css'

class EdSheeran extends Component {
  state = {
    initialList: [],
    search: '',
  }

  componentDidMount() {
    const {tracksList} = this.props
    this.setState({
      initialList: tracksList,
    })
  }

  changeSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onDelete = id => {
    this.setState(prevState => ({
      initialList: prevState.initialList.filter(each => each.id !== id),
    }))
  }

  renderTracks = () => {
    const {initialList, search} = this.state
    console.log(initialList)
    const filteredData = initialList.filter(each =>
      each.name.toLowerCase().includes(search.toLowerCase()),
    )
    const lengthOf = filteredData.length
    return lengthOf > 0 ? (
      <ul className="tracksContainer">
        {filteredData.map(each => (
          <TrackItem item={each} key={each.id} onDelete={this.onDelete} />
        ))}
      </ul>
    ) : (
      <div className="empty-container">
        <p className="No-Songs-Found">No Songs Found</p>
      </div>
    )
  }

  render() {
    const {search} = this.state
    return (
      <div className="app-container">
        <div className="banner-container">
          <div className="content-container">
            <h1 className="singer-name">Ed Sheeran</h1>
            <p className="profession">Singer</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="header">
            <h1 className="songs-playlist">Songs Playlist</h1>
            <div className="inputContainer">
              <input
                className="input"
                value={search}
                placeholder="Search"
                type="search"
                onChange={this.changeSearch}
              />
              <BiSearch className="icon" color="#ffffff" size="18" />
            </div>
          </div>
          {this.renderTracks()}
        </div>
      </div>
    )
  }
}
export default EdSheeran
