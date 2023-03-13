import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import HeroSection from "@/components/SiteSectionsModule/HeroSection";

describe("HeroSection", () => {
  it('renders a section element with "hero-section" class', () => {
    render(<HeroSection />);

    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass("hero-section");
  });

  it("renders a heading", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", {
      name: /The only paymasters access infrastructure you will need/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a paragraph", () => {
    render(<HeroSection />);

    const paragraph = screen.getByText(
      /Using paymasters to simplify zk transactions and provide superior UX to dapps./i
    );

    expect(paragraph).toBeInTheDocument();
  });

  // test('renders the waitlist form and handles submit', () => {
  //   const mockHandleUpdateWaitlist = jest.fn();
  //   const { getByLabelText, getByRole } = render(<HeroSection handleUpdateWaitlist={mockHandleUpdateWaitlist} />);
  //   const emailInput = getByLabelText('Email');
  //   const submitButton = getByRole('button', { name: 'Join Waitlist' });
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //   fireEvent.click(submitButton);
  //   expect(mockHandleUpdateWaitlist).toHaveBeenCalledWith({ email: 'test@example.com' });
  // });

  test("renders the waitlist form and handles submit", () => {
    const { getByTestId, getByRole } = render(<HeroSection />);
    const emailInput = getByTestId("email");
    const submitButton = getByRole("button", { name: "Join Waitlist" });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);
    expect(submitButton).toBeDisabled(); // check if submit button is disabled after clicking
    expect(emailInput).toHaveValue(""); // check if email input is cleared after clicking
  });
});
