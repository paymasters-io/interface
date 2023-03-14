import { render, screen } from "@testing-library/react";
import CTASection from "@/components/SiteSectionsModule/CTASection";

describe("CTASection", () => {
  it("renders a heading, an image, and a button", () => {
    render(<CTASection />);
    const heading = screen.getByRole("heading", {
      name: /get started, explore and create paymasters/i,
    });
    const image = screen.getByRole("img", { name: /paymaster logo/i });
    const button = screen.getByRole("button", { name: /launch app/i });

    expect(heading).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
