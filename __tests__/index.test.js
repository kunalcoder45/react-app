import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import axios from 'axios'

jest.mock('axios')

describe('Home Page', () => {
  it('renders heading', () => {
    render(<Home />)
    const heading = screen.getByText('Docker', { selector: 'h1' })
    expect(heading).toBeInTheDocument()
  })
})

describe('checking paragraph', () => {
    it('renders paragraph', () => {
        render(<Home />)
        const paragraph = screen.getByText('Docker is a platform for developing, shipping, and running applications in containers.', { selector: 'p' })
        expect(paragraph).toBeInTheDocument()
    });
});


describe("Page Component API Call", () => {
  it("fetches users from API and logs them", async () => {
    const mockData = { users: [{ id: 1, name: "John" }] };
    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<Home />);

    // Check axios call
    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/users');
  });
});