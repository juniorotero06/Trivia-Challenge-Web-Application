import React from "react";

export function ControlledCarousel(props) {
  return (
    <div class="carousel-item active">
      <span class="d-block w-50 h2">{props.question}</span>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label class="form-check-label" for="inlineRadio1">
          True
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label class="form-check-label" for="inlineRadio2">
          False
        </label>
      </div>
    </div>
  );
}
