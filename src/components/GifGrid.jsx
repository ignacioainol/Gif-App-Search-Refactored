import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Loading } from './Loading';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading &&
        <Loading />
      }

      <div className='row'>
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
