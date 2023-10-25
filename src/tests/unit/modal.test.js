import Modal from "../../components/Modal";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'


describe('Modal Component', () => {
  test('should render h1', () => {
    const num = 5
    render(
      <MemoryRouter>
        <Modal
          text={null}
          num={num}
        />
      </MemoryRouter>
    )
    const h1 = screen.getByText(`Travesura realizada`)
    expect(h1).toBeInTheDocument()
    const anchor = screen.getByTestId('linker')
    expect(anchor).toBeInTheDocument()
  })
  test('Render anchor and fire events', () => {
    const num = 5
    render(
      <MemoryRouter>
        <Modal
          text={null}
          num={num}
          route={'/first'}
        />
      </MemoryRouter>
    )
    const anchor = screen.getByTestId('linker')
    expect(anchor).toBeInTheDocument()
    fireEvent.click(anchor)
    const btn = screen.getByTestId('btn')
    fireEvent.click(btn)
    expect(window.location.pathname).toBe('/');

  })
})