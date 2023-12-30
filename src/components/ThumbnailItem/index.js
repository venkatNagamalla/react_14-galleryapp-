// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onImageClick, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onSelectImage = () => {
    onImageClick(id)
  }

  const selectedStyle = isSelected ? 'thumbnail-img selected' : 'thumbnail-img'

  return (
    <li className="list-item">
      <button type="button" onClick={onSelectImage}>
        <img
          className={selectedStyle}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
