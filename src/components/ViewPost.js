import { TiEdit } from 'react-icons/ti'
import { FaTrashAlt } from 'react-icons/fa'
import './ViewPost.css'

const ViewPost = ({ listDetails, editList, deleteList, toggleIsLiked }) => {
  const { id, name, list, isLiked, initialClassName } = listDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const onDeleteList = () => {
    deleteList(id)
  }

  const onEditList = () => {
    editList(id, name, list)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
          </div>
          <p className="comment">{list}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <button className={likeTextClassName} type="button" onClick={onClickLike}>
            <img src={likeImageUrl} alt="like" className="like-image" />
            Like
          </button>
        </div>
        <button className="button edit-button" type="button" onClick={onEditList}>
          <TiEdit className="edit-icon" />
        </button>
        <button className="button delete-button" type="button" onClick={onDeleteList}>
          <FaTrashAlt className="delete-icon" />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default ViewPost
