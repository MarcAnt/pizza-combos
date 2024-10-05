import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Pizza pages", () => {
  test("Page", () => {
    render(<Page />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Crea tu combo, Agrega extras y envíanos tu pedido",
      })
    ).toBeDefined();
  });
});
