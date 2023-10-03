import "./Modal.css";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";

const ExerciseModal = ({ children, rstId }) => {
  const [formData, setFormData] = useState({});

  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Exercise</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Add Exercise here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input
              className="Input"
              name="name"
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="duration">
              {"Duration (in minutes)"}
            </label>
            <input
              className="Input"
              name="duration"
              type="number"
              min="0"
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="exerciseType">
              Exercise Type
            </label>
            <select
              className="Input"
              name="exerciseType"
              onChange={(e) => formDataHandler(e)}
            >
              <option value="yoga">Yoga</option>
              <option value="aerobic">Aerobic</option>
              <option value="strenghtTraining">Strength Training</option>
              <option value="walking">walking</option>
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
            </select>
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={""}>
                Save review
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

export default ExerciseModal;
