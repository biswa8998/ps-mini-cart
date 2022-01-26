import React from "react";

import { shallow, mount } from "enzyme";

import NumberInput from "./NumberInput";

describe("Testing NumberInput component", () => {
  it("should have valid structure and properties", () => {
    const numberInputComponent = shallow(
      <NumberInput
        wrapperStyleClass="test-class"
        minimum={0}
        inputValue={1}
        onChangeCallback={jest.fn}
      />
    );

    expect(numberInputComponent.find(".test-class").length).toEqual(1);
    expect(numberInputComponent.find("input").length).toEqual(1);
    expect(numberInputComponent.find("input").at(0).props().value).toEqual(1);
    expect(numberInputComponent.find("button").length).toEqual(2);
  });

  describe("On click of -", () => {
    it("should decrement the input value", () => {
      const numberInputComponent = shallow(
        <NumberInput
          wrapperStyleClass="test-class"
          minimum={0}
          inputValue={1}
          onChangeCallback={jest.fn}
        />
      );

      expect(numberInputComponent.find(".button-decrement").length).toEqual(1);
      numberInputComponent.find(".button-decrement").at(0).simulate("click", {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      });
      expect(numberInputComponent.find("input").at(0).props().value).toEqual(0);
    });
  });

  describe("On click of +", () => {
    it("should increment the input value", () => {
      const numberInputComponent = shallow(
        <NumberInput
          wrapperStyleClass="test-class"
          minimum={0}
          inputValue={1}
          onChangeCallback={jest.fn}
        />
      );

      expect(numberInputComponent.find(".button-increment").length).toEqual(1);
      numberInputComponent.find(".button-increment").at(0).simulate("click", {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      });
      expect(numberInputComponent.find("input").at(0).props().value).toEqual(2);
    });
  });

  describe("On changing input value", () => {
    describe("If input is valid", () => {
      it("should change the input value", () => {
        const numberInputComponent = shallow(
          <NumberInput
            wrapperStyleClass="test-class"
            minimum={0}
            inputValue={1}
            onChangeCallback={jest.fn}
          />
        );

        numberInputComponent
          .find("input")
          .at(0)
          .simulate("change", {
            preventDefault: jest.fn(),
            stopPropagation: jest.fn(),
            target: {
              value: "20",
            },
          });
        expect(numberInputComponent.find("input").at(0).props().value).toEqual(
          20
        );
      });
    });

    describe("On input is invalid", () => {
      it("should not change the input value", () => {
        const numberInputComponent = shallow(
          <NumberInput
            wrapperStyleClass="test-class"
            minimum={0}
            inputValue={1}
            onChangeCallback={jest.fn}
          />
        );

        numberInputComponent
          .find("input")
          .at(0)
          .simulate("change", {
            preventDefault: jest.fn(),
            stopPropagation: jest.fn(),
            target: {
              value: "ABC",
            },
          });
        expect(numberInputComponent.find("input").at(0).props().value).toEqual(
          1
        );
      });
    });

    describe("On input of empty string", () => {
      it("should set value to 0", () => {
        const numberInputComponent = mount(
          <NumberInput
            wrapperStyleClass="test-class"
            minimum={0}
            inputValue={1}
            onChangeCallback={jest.fn}
          />
        );

        numberInputComponent.setProps({ inputValue: 4 });
        numberInputComponent.update();

        numberInputComponent
          .find("input")
          .at(0)
          .simulate("change", {
            preventDefault: jest.fn(),
            stopPropagation: jest.fn(),
            target: {
              value: "",
            },
          });
        expect(numberInputComponent.find("input").at(0).props().value).toEqual(
          0
        );
      });
    });
  });
});
