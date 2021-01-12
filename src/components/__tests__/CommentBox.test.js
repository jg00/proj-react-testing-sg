import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    // Simulate change event and pass in a fake event object
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment",
      },
    });

    // Force component rerender using enzyme's update() function. Why?
    // When we simulate a change event a setState will cause a rerender.  However, setState is async and will queue a rerender.
    // This means our textarea will not immediately have the updated value for us to make an assertion on that new value
    // In order for us not to have to wait for the rerender by react we force our component to rerender.
    wrapped.update();
  });

  // 1 Simulate a onChange event, 2 Provide fake event object, 3 force rerender so component will have new state to be able to write proper assertions on.
  it("has a text area that users can type in", () => {
    // Write assertion to take a look at that text area to make sure that it has received the correct value.
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("whe form is submitted, text area gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});

/*
  // .simulate("event", mock {} object)
  .simulate("change", {
    target: {
      value: "new comment",
    },
  });

  (Important) In this example we are making the mock object look like an event object triggered when a change event occurs.




  // console.log(wrapped.find("textarea").length);
  // console.log(wrapped.find("button").length);
*/
