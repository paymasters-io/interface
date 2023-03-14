import { render, screen } from "@testing-library/react";
import BuildSection from "@/components/SiteSectionsModule/BuildSection";

describe("BuildSection", () => {
  test("renders section header text", () => {
    render(<BuildSection />);
    const headerText = screen.getByRole("heading", { level: 2 });
    expect(headerText).toHaveTextContent("Build paymasters");
  });

  test("renders SDK explore button", () => {
    render(<BuildSection />);
    const sdkButton = screen.getByRole("button", { name: "Explore SDK" });
    expect(sdkButton).toBeInTheDocument();
  });

  test("renders supported languages list", () => {
    render(<BuildSection />);
    const list = screen.getByRole("list", { name: "supported languages list" });
    expect(list).toBeInTheDocument();

    // check if list has 5 items
    const lsitItems = list.querySelectorAll("li");
    expect(lsitItems).toHaveLength(5);
  });

  test("loads codeblock image", async () => {
    render(<BuildSection />);
    const image = await screen.findByAltText("paymaster codeblock");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "300");
    expect(image).toHaveAttribute("height", "300");
  });

  test("loads npm icon image", async () => {
    render(<BuildSection />);
    const image = await screen.findByAltText("npm icon");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "32");
    expect(image).toHaveAttribute("height", "32");
  });

  test("loads code icon image", async () => {
    render(<BuildSection />);
    const image = await screen.findByAltText("npm icon");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "32");
    expect(image).toHaveAttribute("height", "32");
  });

  test("loads windows icon image", async () => {
    render(<BuildSection />);
    const image = await screen.findByAltText("npm icon");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("width", "32");
    expect(image).toHaveAttribute("height", "32");
  });
});
