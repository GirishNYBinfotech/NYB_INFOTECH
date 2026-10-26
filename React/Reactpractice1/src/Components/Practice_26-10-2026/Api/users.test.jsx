import {render,screen,waitFor,} from "@testing-library/react";
import {describe,it,expect,vi,afterEach} from "vitest";
import Users from "./Users";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Users API", () => {
  it("shows the loading message", async () => {
    let resolveFetch;

    vi.stubGlobal(
      "fetch",
      vi.fn(
        () =>
          new Promise((resolve) => {
            resolveFetch = resolve;
          })
      )
    );

    render(<Users />);

    expect(
      screen.getByText("Loading users...")
    ).toBeInTheDocument();

    // Finish the pending request so the test can clean up.
    resolveFetch({
      ok: true,
      json: async () => [],
    });

    await waitFor(() => {
      expect(
        screen.queryByText("Loading users...")
      ).not.toBeInTheDocument();
    });
  });

  it("displays users when the API succeeds", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          { id: 1, name: "Rahul" },
          { id: 2, name: "Priya" },
        ],
      })
    );

    render(<Users />);
    expect(await screen.findByText("Rahul")).toBeInTheDocument();
    expect(screen.getByText("Priya") ).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users")
  });

  it("displays an error when the API fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(
        new Error("Network error")
      )
    );

    render(<Users />);

    expect(
      await screen.findByRole("alert")
    ).toHaveTextContent("Something went wrong");
  });
});