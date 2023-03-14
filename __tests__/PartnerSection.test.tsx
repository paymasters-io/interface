import { render, screen } from "@testing-library/react";
import PartnersSection from "@/components/SiteSectionsModule/PartnersSection";

describe("PartnersSection", () => {
  it("renders the section header", () => {
    render(<PartnersSection />);
    const header = screen.getByRole("heading", {
      level: 2,
      name: /our partners/i,
    });
    expect(header).toBeInTheDocument();
  });

  it("renders a list of partners", () => {
    render(<PartnersSection />);
    const partnerList = screen.getByRole("list", { name: /partner list/i });
    const partners = partnerList.querySelectorAll(".partner-item");

    expect(partners.length).toBe(7);
  });

  it("renders each partner with a logo and name", () => {
    render(<PartnersSection />);
    const partnerList = screen.getByRole("list", { name: /partner list/i });
    const partners = partnerList.querySelectorAll(".partner-item");

    partners.forEach((partner) => {
      const logo = partner.querySelector("img");
      const name = partner.querySelector("h3");

      expect(logo).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });
  });

  // it("renders each partner with a logo and name", () => {
  //   render(<PartnersSection />);
  //   const partnerList = screen.getByRole("list", { name: /partner list/i });
  //   const partners = partnerList.querySelectorAll(".partner-item");

  //   partners.forEach((partner) => {
  //     console.log({ partnerName: partner.name });

  //     // const logo = screen.getByRole('img', { name: partner.name });
  //     // const name = screen.getByRole('heading', { name: partner.name });

  //     // expect(logo).toBeInTheDocument();
  //     // expect(name).toBeInTheDocument();
  //   });
  // });
});
