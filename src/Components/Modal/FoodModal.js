import "./Modal.css";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { exerciseCalories } from "../../Constants";

const FoodModal = ({ children }) => {
  const [formData, setFormData] = useState({
    foodName: "New food",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

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
    setFormData(() => ({
      foodName: "New food",
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
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
            Add Food here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="foodName">
              Name
            </label>
            <input
              className="Input"
              name="foodNName"
              defaultValue={formData.foodName}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="calories">
              {"Calories"}
            </label>
            <input
              className="Input"
              name="calories"
              type="number"
              min="0"
              defaultValue={formData.calories}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="protein">
              {"Protein (in Grams)"}
            </label>
            <input
              className="Input"
              name="protein"
              type="number"
              min="0"
              defaultValue={formData.protein}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="carbohydrates">
              {"Carbs (in Grams)"}
            </label>
            <input
              className="Input"
              name="carbohydrates"
              type="number"
              min="0"
              defaultValue={formData.carbohydrates}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="fat">
              {"Fat (in Grams)"}
            </label>
            <input
              className="Input"
              name="fat"
              type="number"
              min="0"
              defaultValue={formData.fat}
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
                Save Food
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

export default FoodModal;
