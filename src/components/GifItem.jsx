import { removeWord } from "../helpers/globalFunctions"
import PropTypes from 'prop-types';


export const GifItem = ({ title, url }) => {

  const formatTitle = removeWord(title, 'GIF');

  return (
    <div className="col-xs-12 col-sm-3 card">
      < img src={url} alt={title} />
      <p>{formatTitle}</p>
    </div >
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};