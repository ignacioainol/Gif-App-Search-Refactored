
export const GifGridItem = ({ title, url }) => {

  return (
    <div className="col-xs-12 col-sm-3 card">
      < img src={url} alt={title} />
      <p>{title}</p>
    </div >
  )
}
