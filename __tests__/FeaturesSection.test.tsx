import { render, screen } from "@testing-library/react";
import FeaturesSection from "@/components/SiteSectionsModule/FeaturesSection";

describe("FeaturesSection", () => {
  it("renders feature items with images, headings and paragraphs", () => {
    render(<FeaturesSection />);
    const featureItems = screen.getAllByRole("article", {
      name: /feature item/i,
    });
    expect(featureItems).toHaveLength(3);
    featureItems.forEach((item) => {
      const image = item.querySelector("img");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src");
      const heading = item.querySelector("h3");
      expect(heading).toBeInTheDocument();
      const paragraph = item.querySelector("p");
      expect(paragraph).toBeInTheDocument();
    });
  });

  it("renders valid images in features-img-cont", () => {
    render(<FeaturesSection />);
    const imagesContainer = screen.getByRole("region", {
      name: /features-section/i,
    });
    const images = imagesContainer.querySelectorAll("img");
    expect(images).toHaveLength(5);
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src");
    });
  });
});
