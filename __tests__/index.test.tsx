import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /The only paymasters access infrastructure you will need/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
