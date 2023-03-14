import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      showSections: "true",
    },
  }),
}));

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /The only paymasters access infrastructure you will need/i,
    });

    expect(heading).toBeInTheDocument();
  });

  // test to check if the waitlist form is rendered
  it("renders a form element with 'waitlist-form' class", () => {
    render(<Home />);

    const form = screen.getByRole("form", {
      name: /waitlist form/i,
    });

    expect(form).toBeInTheDocument();
    expect(form).toHaveClass("waitlist-form");
  });

  if (useRouter().query.showSections === "true") {
    // test to check if the rebates middlware section is rendered
    it("renders a section element with 'rebates-middleware-section' class", () => {
      render(<Home />);

      const section = screen.getByRole("region", {
        name: /Rebates Middleware/i,
      });

      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("rebates-middleware-section");
    });

    // test to check if the features section is rendered
    it("renders a section element with 'features-section' class", () => {
      render(<Home />);

      const section = screen.getByRole("region", {
        name: /Features/i,
      });

      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("features-section");
    });

    // test to check if the build section is rendered
    it("renders a section element with 'build-section' class", () => {
      render(<Home />);

      const section = screen.getByRole("region", {
        name: /Build/i,
      });

      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("build-section");
    });

    // test to check if the partners section is rendered
    it("renders a section element with 'partners-section' class", () => {
      render(<Home />);

      const section = screen.getByRole("region", {
        name: /partners section/i,
      });

      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("partners-section");
    });

    // test to check if the cta section is rendered
    it("renders a section element with 'cta-section' class", () => {
      render(<Home />);

      const section = screen.getByRole("region", {
        name: /cta section/i,
      });

      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("cta-section");
    });
  } else {
    // test to check if there is only one section element
    it("renders only one section element", () => {
      render(<Home />);
      const sections = screen.getAllByRole("region");
      expect(sections.length).toBe(1);
    });

    // test to check if only the hero section is rendered
    it("renders a section element with 'hero-section' class", () => {
      render(<Home />);

      const section = screen.getByRole("region", {
        name: /hero section/i,
      });

      expect(section).toBeInTheDocument();
      expect(section).toHaveClass("hero-section");
    });
  }
});
