import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { BrowserRouter } from "react-router-dom";

import Home from "../../../components/Home/Home";

describe("test home component", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders loader", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
