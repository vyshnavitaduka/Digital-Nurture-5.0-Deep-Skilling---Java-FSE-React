import { render, screen } from "@testing-library/react";
import GitClient from "./GitClient";

test("renders GitHub Client heading", () => {
  render(<GitClient />);
  const heading = screen.getByText(/GitHub Client/i);
  expect(heading).toBeInTheDocument();
});

test("renders search input", () => {
  render(<GitClient />);
  const input = screen.getByPlaceholderText(/Enter GitHub username/i);
  expect(input).toBeInTheDocument();
});
