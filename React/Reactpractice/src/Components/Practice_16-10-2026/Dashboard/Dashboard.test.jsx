import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import Dashboards from "./Dashboards";

function renderApp() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Dashboards />
    </MemoryRouter>
  );
}

describe("Conditional Rendering and Navigation", () => {
  it("renders the Home page", () => {
    renderApp();

    expect(
      screen.getByRole("heading", { name: "Home Page" })
    ).toBeInTheDocument();
  });

  it("does not show the message initially", () => {
    renderApp();

    expect(
      screen.queryByText("Hello, React!")
    ).not.toBeInTheDocument();
  });

  it("shows the message when clicked", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(
      screen.getByRole("button", { name: "Toggle Message" })
    );

    expect(
      screen.getByText("Hello, React!")
    ).toBeInTheDocument();
  });

  it("navigates to Dashboard", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(
      screen.getByRole("button", { name: "Go to Dashboard" })
    );

    expect(
      screen.getByRole("heading", { name: "Dashboard Page" })
    ).toBeInTheDocument();
  });

  it("navigates using the Dashboard link", async () => {
    const user = userEvent.setup();
    renderApp();

    await user.click(
      screen.getByRole("link", { name: "Dashboard Link" })
    );

    expect(
      screen.getByRole("heading", { name: "Dashboard Page" })
    ).toBeInTheDocument();
  });
});

// describe() — Groups related test cases under one name.
// it() — Defines one individual test case. It can also be written as test().
// renderApp() — A helper function that renders your React application for testing. It must be defined elsewhere in your test setup.
// expect() — Checks whether the actual result matches the expected result.
// screen — Helps find elements rendered on the screen.
// userEvent — Simulates user interactions such as clicking buttons and links.