import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import '@testing-library/jest-dom';

it("it works without crashing", () => {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

it("it matches previous snapshot", () => {
  const { asFragment } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow on the second image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  fireEvent.click(container.querySelector(".bi-arrow-right-circle"));
  fireEvent.click(container.querySelector(".bi-arrow-left-circle"));

  // expect the first image to show, but not the second or the third.
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
});


it("does not show left arrow on first image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  expect(
    container.querySelector(".bi-arrow-left-circle")
  ).not.toBeInTheDocument();
});

it("does not show right arrow on last image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  for (const _ of TEST_IMAGES)
    fireEvent.click(rightArrow);

  expect(container.querySelector(".bi-arrow-right-circle")).toBeNull();
});
