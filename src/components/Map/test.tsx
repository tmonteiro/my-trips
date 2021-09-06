import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in corret place', () => {
    const place = {
      id: '1',
      name: 'Brotas',
      slug: 'brotas',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const placeTwo = {
      id: '2',
      name: 'Beijing',
      slug: 'beijing',
      location: {
        latitude: 500,
        longitude: -29
      }
    }
    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/brotas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/beijing/i)).toBeInTheDocument()
  })
})
