import Memory from "../../components/Memory";
import { fireEvent, render, screen } from "@testing-library/react";
import { imgMemory } from "../../components/Memory/constant";

describe('Memory component', () => {
  test('Rendering correctly', () => {
    render(
      <Memory />
    )
    const el = screen.getAllByText('Encuentrame')
    expect(el[0]).toBeInTheDocument()
    expect(el).toHaveLength(imgMemory.length);
  })

  test('testing some functions', () => {
    render(
      <Memory />
    )
    const oneCircle = screen.getByTestId('pic0')
    fireEvent.click(oneCircle)
    expect(oneCircle.style.animation.includes('flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both')).toBe(true);
  })
})