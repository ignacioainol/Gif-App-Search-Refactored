import { getGifs } from "../../src/helpers/getGifs"

describe('Test en getGifs', () => {

  test('Debe de retornar un arreglo de Gifs', async () => {

    const gifs = await getGifs('Hunter X Hunter');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })

})