import React from "react";

export default function RadioComponent(props) {
  return (
    <div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id={`inlineRadio${props.index}`}
          value="True"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          True
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id={`inlineRadio${props.index + 1}`}
          value="False"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          False
        </label>
      </div>
    </div>
  );
}
