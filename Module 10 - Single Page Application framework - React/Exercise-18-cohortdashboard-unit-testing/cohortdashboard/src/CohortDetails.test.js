import { render, screen } from "@testing-library/react";
import CohortDetails from "./CohortDetails";

test("renders nothing when no cohort is passed", () => {
  const { container } = render(<CohortDetails cohort={null} />);
  expect(container).toBeEmptyDOMElement();
});

test("renders cohort details when a cohort is passed", () => {
  const cohort = { name: "Test Cohort", students: 10, startDate: "2026-01-01" };
  render(<CohortDetails cohort={cohort} />);
  expect(screen.getByText(/Test Cohort/i)).toBeInTheDocument();
  expect(screen.getByText(/Students enrolled: 10/i)).toBeInTheDocument();
});
