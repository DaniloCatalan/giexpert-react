import { getByText, render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe("pruebas en <GiftGridItem/>", () => {
  const title = "Saitama";
  const url = "https://one-puch/saitama.jpg";

  test("debe hacer match con el snaptshot ", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con el url y el alt indicado', () => {
    render(<GifGridItem title={title} url={url} />);
    // screen.debug()
    // una forma
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    // otra forma desestructurando
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })
  test('debe de mostrar el titulo del componente', () => { 
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
});
