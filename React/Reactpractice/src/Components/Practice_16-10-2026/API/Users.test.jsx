import { render, screen } from "@testing-library/react";
import { vi, afterEach, it, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import Users from "./Users";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

it("displays users from the API", async () => {
  const mockUsers = [
    { id: 1, name: "Girish" },
    { id: 2, name: "Rahul" },
  ];

  vi.spyOn(globalThis, "fetch").mockResolvedValue({
    ok: true,
    json: async () => mockUsers,
  });

  render(<Users />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  expect(await screen.findByText("Girish"))
    .toBeInTheDocument();

  expect(screen.getByText("Rahul"))
    .toBeInTheDocument();

  expect(globalThis.fetch)
    .toHaveBeenCalledWith("/api/users");
});