import Cake from "../../pages/Cake";
import { screen, render } from "@testing-library/react"
import { abc } from "../../components/Complete/constants"

describe('Rendering correctly', () => {
  test("renders cake page", () => {
    render(<Cake />)
    const title = screen.getByText('COMPLETA LA PALABRA')
    expect(title).toBeInTheDocument()
  })

  test("renders complete component", () => {
    render(<Cake />)

    const el = screen.getByText('Intentos restantes')
    expect(el).toBeInTheDocument()
    const abcLetters = screen.getAllByTestId('abcLetters')
    expect(abcLetters).toHaveLength(abc.length);
  })

})