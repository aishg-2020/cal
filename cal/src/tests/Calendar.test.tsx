import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calendar from "../components/Calendar/Calendar";

describe("Calendar", () => {
  it("renders the correct month and year", () => {
    const date = new Date(2023, 4, 1); // May 2023
    const { getByText } = render(<Calendar date={date} />);
    const monthYearText = getByText("May 2023");
    expect(monthYearText).toBeInTheDocument();
  });

  it("renders the correct weekdays", () => {
    const date = new Date(2023, 4, 1); // May 2023
    const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const { getByText } = render(<Calendar date={date} />);
    weekdays.forEach((weekday) => {
      const weekdayText = getByText(weekday);
      expect(weekdayText).toBeInTheDocument();
    });
  });

  it("renders the correct dates", () => {
    const date = new Date(2023, 4, 1); // May 2023
    const { getAllByTestId } = render(<Calendar date={date} />);
    const dateCells = getAllByTestId("date-cell");
    expect(dateCells.length).toBe(31); // May 2023 has 31 days
  });

  it("highlights the correct date", () => {
    const date = new Date(2023, 4, 15); // May 15, 2023
    const { getByText } = render(<Calendar date={date} />);
    const highlightedDate = getByText("15");
    expect(highlightedDate).toHaveClass("highlight");
  });
});
