import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {

  const category = 'Vegeta';

  test('should first showing the loading', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  })

  test('Debde de mostrar items cuando se cargan las imagenes uSeFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'httś://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'httś://localhost/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})