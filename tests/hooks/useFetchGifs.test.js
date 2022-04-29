import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('test in useFetchGifs custom hook', () => {

  test('Debe de regresar estado inicial', () => {

    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  })

  test('Debe de retornar un arreglo de imagenes e isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    // console.log(images.length);

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  })
})