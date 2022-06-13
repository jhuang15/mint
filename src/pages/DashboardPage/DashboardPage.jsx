import * as React from 'react';
import { todoList } from "../../utilities/todoList";
import { useState } from 'react'
import './DashboardPage.css';

export default function DashboardPage() {

  const [checkedState, setCheckedState] = useState(
    new Array(todoList.length).fill(false)
  );
  
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="background-img">
    <div className="dashboard-container">
      <div className="dashboard-checkbox">
      <div>
      <h2>&#8788; Next On Your CheckList</h2>
      <ul>
      {todoList.map(({ name}, index) => {
          return (
            <li key={index}>
              <div>
                <div className="checkbox-row">
                  <input
                  className="checkbox"
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
     </div>
      </div>

      <div className="dashboard-expense">
        <h2>$ Your Budget </h2>
      </div>
    </div>
    </div>
  );
}