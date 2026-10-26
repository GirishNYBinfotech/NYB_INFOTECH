import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { NavigationRoutes } from "./Navigation";

describe("Navigation", () => {
  it("displays the Home page initially", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavigationRoutes />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Home Page" })
    ).toBeInTheDocument();
  });

  it("navigates from Home to About", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavigationRoutes />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("link", { name: "Go to About" })
    );

    expect(
      screen.getByRole("heading", { name: "About Page" })
    ).toBeInTheDocument();
  });

  it("navigates from About back to Home", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/about"]}>
        <NavigationRoutes />
      </MemoryRouter>
    );

    await user.click(
      screen.getByRole("link", { name: "Go to Home" })
    );

    expect(
      screen.getByRole("heading", { name: "Home Page" })
    ).toBeInTheDocument();
  });

  it("displays 404 for an unknown route", () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <NavigationRoutes />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: "404 - Page Not Found",
      })
    ).toBeInTheDocument();
  });
});