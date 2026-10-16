import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders the button text", () => {
    render(<Button text="Submit" onClick={() => {}} />);

    expect(
      screen.getByRole("button", { name: "Submit" })
    ).toBeInTheDocument();
  });

  it("calls the function when clicked", () => {
    const handleClick = vi.fn();

    render(<Button text="Submit" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled is true", () => {
    render(
      <Button text="Submit" onClick={() => {}} disabled={true} />
    );

    expect(screen.getByRole("button")).toBeDisabled();
  });
});