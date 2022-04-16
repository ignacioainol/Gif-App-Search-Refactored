import { removeWord } from "../helpers/globalFunctions"

export const GifGridItem = ({ title, url }) => {

  const formatTitle = removeWord(title, 'GIF');

  return (
    <div className="col-xs-12 col-sm-3 card">
      < img src={url} alt={title} />
      <p>{formatTitle}</p>
    </div >
  )
}
