import React from "react";
import { render, screen } from "@testing-library/react";
import RebatesMiddleWareSection from "@/components/SiteSectionsModule/RebatesMiddleWareSection";

describe("RebatesMiddleWareSection", () => {
  it("displays the correct text", () => {
    render(<RebatesMiddleWareSection />);
    expect(screen.getByText("Rebates Middleware")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Loyalty programs are a way we know to give back to our most loyal users and with account abstraction, it is possible to create a standalone incentive system."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your users can earn a fraction of their transaction value each time they make a transaction."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "However building this system distinctively may incur additional miscellaneous. With paymasters, you can integrate chargebacks as a middleware."
      )
    ).toBeInTheDocument();
  });

  it("displays the image", () => {
    render(<RebatesMiddleWareSection />);
    const image = screen.getByAltText("Rebates Illustration");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });
});
