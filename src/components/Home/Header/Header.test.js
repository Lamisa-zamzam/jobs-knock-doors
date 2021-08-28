import { render } from "@testing-library/react";
import Header from "./Header";

describe("renders login page", () => {
    it("renders the whole login view", () => {
        const { getByTestId } = render(<Header />);

        expect(getByTestId("headerDiv")).toBeTruthy();
    });
});
