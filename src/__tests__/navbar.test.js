import { fireEvent, render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";


test('Search component opens on click of search button', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const searchBtn = screen.getByTestId('searchBtn');
    fireEvent.click(searchBtn);
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
});

