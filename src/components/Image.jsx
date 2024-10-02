import PropTypes from "prop-types" // Use PropTypes package to validate Property
export default function Image({ imgUrl }) {
  return (
    <>
      <img src={imgUrl} width="200px"/>
    </>
  )
}

Image.propTypes = {
  imgUrl: PropTypes.string
}