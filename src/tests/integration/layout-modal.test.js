import Layout from "../../components/Layout";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'

describe('Layout as parent', () => {
  test('Running modal', () => {
    const loc = 'https://www.google.com.co/maps/place/Cancha+de+Voleibol+Playa/@11.0179394,-74.791315,19z/data=!3m1!4b1!4m5!3m4!1s0x8ef42d37b04ede7b:0xd858ef7671d05397!8m2!3d11.0179381!4d-74.7907678?hl=es&authuser=0'
    render(
      <MemoryRouter>
        <Layout
          stop={5}
          route={"/first"}
          isOpen={true}
          location={loc}
        >
          <div data-testid="child">Child Content</div>
        </Layout>
      </MemoryRouter>
    )
    const stops2 = screen.getByText('5/5')
    expect(stops2).toBeInTheDocument()
    const h1 = screen.getByText(`Travesura realizada`)
    expect(h1).toBeInTheDocument()
    const anchor = screen.getByTestId('linker')
    expect(anchor).toBeInTheDocument()
    expect(anchor).toHaveAttribute('href', loc)
  })
})