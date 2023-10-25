import Layout from "../../components/Layout";
import { render, screen } from "@testing-library/react";

describe('Layout as parent', () => {
  test('should render ok', () => {
    render(
      <Layout>
        <div data-testid="child">Child Content</div>
      </Layout>
    )
    const childEl = screen.getByTestId('child')
    expect(childEl).toBeInTheDocument()
    expect(childEl).toHaveTextContent(/Child Content/)
  })

  test('should render props', () => {
    render(
      <Layout
        stop={3}
      >
        <div data-testid="child">Child Content</div>
      </Layout>
    )
    const firstEl = screen.getByText('Paradas');
    const stops = screen.getByTestId('stops')
    const stops2 = screen.getByText('3/5')
    expect(stops2).toBeInTheDocument()
    expect(stops).toBeInTheDocument()
    expect(firstEl).toBeInTheDocument();
  })
})