import * as React from 'react';
import { todoList } from "../../utilities/todoList";
import { useState } from 'react'

export default function DashboardPage() {
  const [list, setList] = React.useState(todoList);
  const [name, setName] = React.useState('');

  const [checkedState, setCheckedState] = useState(
    new Array(todoList.length).fill(false)
  );
  
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-checkbox">
      <div>
      <h2>Next On Your CheckList</h2>
      <ul>
      {todoList.map(({ name}, index) => {
          return (
            <li key={index}>
              <div>
                <div>
                  <input
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
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <div className="dashboard-expense">
        <h2>Total up your expences</h2>

      </div>
    
    </div>
  );

  
}