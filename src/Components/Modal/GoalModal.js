import "./Modal.css";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addEntry } from "../../dataActions";

const GoalModal = ({ children }) => {
  const [formData, setFormData] = useState({
    goalName: "New Goal",
    goalDescription: "New Goal",
    targetDate: null,
    targetCaloriesValue: null,
    status: "In Progress",
  });
  const dispatch = useDispatch();

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    console.log({
      ...formData,
    });
    dispatch(addEntry({ type: "goals", data: formData }));
    setFormData(() => ({
      goalName: "New Goal",
      goalDescription: "New Goal",
      targetDate: null,
      targetCaloriesValue: null,
      status: "In Progress",
    }));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Goal</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Add Goal here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="goalName">
              Name
            </label>
            <input
              className="Input"
              name="foodNName"
              defaultValue={formData.goalName}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="goalDescription">
              {"Goal Description"}
            </label>
            <input
              className="Input"
              name="goalDescription"
              defaultValue={formData.goalDescription}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="targetDate">
              {"Target Date"}
            </label>
            <input
              className="Input"
              type="date"
              name="targetDate"
              defaultValue={formData?.targetDate}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="targetCaloriesValue">
              {"Target calories"}
            </label>
            <input
              className="Input"
              name="targetCaloriesValue"
              type="number"
              min="0"
              defaultValue={formData.targetCaloriesValue}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="status">
              {"Status"}
            </label>
            <input
              className="Input"
              name="status"
              defaultValue={formData.status}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={submitHandler}>
                Save Goal
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <RxCross2 />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GoalModal;
