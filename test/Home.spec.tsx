import Home from "@/app/page";
import { screen, render } from "@testing-library/react";

describe("Home component", () => {
  it("render correctly", () => {
    render(<Home />);
    expect(screen.getByText("Oii")).toBeInTheDocument();
  });
});
