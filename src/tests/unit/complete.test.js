import Complete from "../../components/Complete";
import { fireEvent, render, screen } from "@testing-library/react";
import { abc, word1 } from "../../components/Complete/constants"

describe('Complete component', () => {
  test('Rendering correctly', () => {
    render(
      <Complete />
    )
    const el = screen.getByText('Intentos restantes')
    expect(el).toBeInTheDocument()

  })

  test('Size of elements list', () => {
    render(
      <Complete />
    )
    const spaces = screen.getAllByTestId('spaces')
    expect(spaces).toHaveLength(word1.length);
    const abcLetters = screen.getAllByTestId('abcLetters')
    expect(abcLetters).toHaveLength(abc.length);
  })

  test('Progess behavior', () => {
    render(
      <Complete />
    )
    const a = screen.getByText('A')
    expect(a).toBeInTheDocument()
    const bar = screen.getByTestId('bar')
    fireEvent.click(a)
    expect(a.style.textDecoration).toEqual('line-through');
    expect(bar.style.width).toEqual("93.75%")
  })
})