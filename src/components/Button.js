import PropTypes from "prop-types"

const Button = ({ btnType, text, onClick }) => {
  return (
    <button
      className={`btn ${btnType}`}
      onClick={onClick}
    >
      { text }
    </button>
  )
}

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button