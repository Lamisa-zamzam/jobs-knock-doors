import { render } from "@testing-library/react";
import Header from "./Header";

describe("renders the header", () => {
    it("renders the header", () => {
        const { getByTestId } = render(<Header />);

        expect(getByTestId("headerDiv")).toBeTruthy();
    });
});
