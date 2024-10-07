import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";
import '@testing-library/jest-dom';

it("it works without crashing", () => {
    const currCard = TEST_IMAGES[0];
    const { asFragment } = render(
        <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={1}
            totalNum={TEST_IMAGES.length}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("it matches previous snapshot", () => {
    const currCard = TEST_IMAGES[0];
    const { asFragment } = render(
        <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={1}
            totalNum={TEST_IMAGES.length}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});