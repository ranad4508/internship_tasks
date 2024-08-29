// __tests__/login.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/login";
import "@testing-library/jest-dom/extend-expect";

describe("Login Page", () => {
  it("renders login form", () => {
    render(<Login />);
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  // Add more tests for form submission, etc.
});
