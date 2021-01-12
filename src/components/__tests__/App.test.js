import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

/*
  // 2 Ref only without enzyme
    it("shows a comment box", () => {
      const div = document.createElement("div");

      ReactDOM.render(<App />, div);

      // Look inside div and check to see if the CommentBox exists
      // console.log(div.innerHTML);
      expect(div.innerHTML).toContain("Comment Box"); // Not a good test.

      ReactDOM.unmountComponentAtNode(div);
  });

  // 1 Using
  npm install --save enzyme @wojtekmaj/enzyme-adapter-react-17 
*/
