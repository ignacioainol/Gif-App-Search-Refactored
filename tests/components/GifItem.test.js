import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Test in GifItem', () => {

  const title = 'Saitama';
  const url = 'https://one-punch..com/saitama.jpeg';

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el URLy el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url)
    expect(alt).toBe(title)

  });

  test('Debe de mostrar el title en el component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
})