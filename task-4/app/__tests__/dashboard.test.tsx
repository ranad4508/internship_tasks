// __tests__/dashboard.test.tsx
import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/dashboard";
import "@testing-library/jest-dom/extend-expect";

describe("Dashboard Page", () => {
  it("renders dashboard content", () => {
    render(<Dashboard />);
    expect(screen.getByText("Welcome to your dashboard!")).toBeInTheDocument();
  });

  // Add more tests for authentication, etc.
});
