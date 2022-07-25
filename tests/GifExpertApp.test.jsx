import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Test en <GifExpertApp', () => {

  test('Debe hacer match con el snapshot', () => {

    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('Cambiar el valor del input', () => {
    render(<GifExpertApp />)
    screen.debug();
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } })
    expect(input.value).toBe('Saitama');
  })

  test('Cambiar el valor del input', () => {
    render(<GifExpertApp />)
    screen.debug();
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } })
    expect(input.value).toBe('Saitama');
  });
})