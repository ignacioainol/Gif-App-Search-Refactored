import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { Loading } from './Loading';

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
            <GifGridItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
