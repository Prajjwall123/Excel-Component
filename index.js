import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Table(props) {
  const [formData] = useState(props.jsonData);
  //   const [inputField, setInputField] = useState({});
  //   const [total, setTotal] = useState({});

  const handleInputChange = (code, colIndex, value) => {
    props?.setInputField((prevState) => ({
      ...prevState,
      [code]: {
        ...prevState[code],
        [colIndex]: value,
      },
    }));
  };

  const calculateFormula = (formula, colIndex) => {
    // Extract field codes (Cabh, MS) from formula using regex
    const variables = formula.match(/\b\w+\b/g);

    // Replace field codes in the formula with their actual values
    let calculatedFormula = formula;

    variables.forEach((variable) => {
      const value = props.inputField[variable]
        ? props.inputField[variable][colIndex]
        : 0;
      calculatedFormula = calculatedFormula.replace(variable, value || 0);
    });
    // Use eval to evaluate the final mathematical expression
    try {
      return eval(calculatedFormula).toFixed(2); // Evaluates the expression (e.g., "20 + 10" becomes 30)
    } catch (error) {
      console.error("Error calculating formula:", error);
      return "";
    }
  };

  const handleColChange = (e) => {
    props.colNum(e); // Update number of columns
  };

  const verticalCalculation = async (formula, colIndex, newtotal) => {
    // const variables = formula.match(/\b\w+\b/g)
    const variables = formula.match(/[A-Z]\w+[A-Z]/g);

    // Replace field codes in the formula with their actual values
    let calculatedFormula = formula;

    variables.forEach((variable) => {
      const value = newtotal[variable] ? newtotal[variable][colIndex] : 0;
      calculatedFormula = calculatedFormula.replace(variable, value || 0);
    });
    // Use eval to evaluate the final mathematical expression
    try {
      return eval(calculatedFormula).toFixed(2); // Evaluates the expression (e.g., "20 + 10" becomes 30)
    } catch (error) {
      console.error("Error calculating formula:", error);
      return "";
    }
  };

  const horizontalCalculation = async (formula, colIndex, newtotal) => {
    const variables = formula.match(/\b\w+\b/g);
    // Function to get the correct value based on index
    const getValue = (variable, index) => {
      return newtotal[variable]?.[index] || 0;
    };

    // Replace field codes in the formula with their actual values
    let calculatedFormula = formula;

    variables.forEach((variable) => {
      const currentIndex = colIndex;
      const previousIndex = Math.max(-1, colIndex - 1);

      // Replace [1] with current index value
      const currentValue = getValue(variable, currentIndex);
      calculatedFormula = calculatedFormula.replace(
        new RegExp(`${variable}\\[1\\]`, "g"),
        currentValue.toString()
      );

      const previousValue = getValue(variable, previousIndex);

      calculatedFormula = calculatedFormula.replace(
        new RegExp(`${variable}\\[0\\]`, "g"),
        previousValue.toString()
      );
    });

    try {
      return eval(calculatedFormula).toFixed(2); // Evaluates the expression
    } catch (error) {
      console.error("Error calculating formula:", error);
      return "";
    }
  };

  const calculateButton = async () => {
    const promises = formData.map((element) =>
      element.AccountHeadings.filter((x) => x.Type === "TotalWithFormula")
    );

    const flattenedArray = await Promise.all(promises).then((results) =>
      results.flat()
    );
    // console.log(flattenedArray)

    let verticalArray = flattenedArray.filter(
      (x) => x.Calculation === "Vertical"
    );
    if (verticalArray) {
      let newvertotal = {};
      await Promise.all(
        verticalArray.map(async (x) => {
          return new Promise((resolve) => {
            x?.Elements.forEach((y) => {
              // console.log(y)
              for (let i = 0; i < props.colNum; i++) {
                const value = document.getElementById(y + "-" + i)?.value || "";
                newvertotal = {
                  ...newvertotal,
                  [y]: {
                    ...newvertotal[y],
                    [i]: value,
                  },
                };
              }
            });
            resolve();
          });
        })
      );
      // console.log(newvertotal)
      props.setTotal(newvertotal);
      await Promise.all(
        verticalArray.map(async (x) => {
          let result = {};
          for (let i = 0; i < props.colNum; i++) {
            let a = await verticalCalculation(x.Formula, i, newvertotal);
            result[i] = a;
          }
          // console.log(result)

          props.setTotal((prevState) => ({
            ...prevState,
            [x.Code]: { ...prevState[x.Code], ...result },
          }));
        })
      );
    }
    let horizontalArray = flattenedArray.filter(
      (x) => x.Calculation === "Horizontal"
    );
    if (horizontalArray) {
      let newhortotal = {};
      await Promise.all(
        horizontalArray.map(async (x) => {
          return new Promise((resolve) => {
            x?.Elements.forEach((y) => {
              // console.log(y)
              for (let i = 0; i < props.colNum; i++) {
                const value = document.getElementById(y + "-" + i)?.value || "";
                newhortotal = {
                  ...newhortotal,
                  [y]: {
                    ...newhortotal[y],
                    [i]: value,
                  },
                };
              }
            });
            resolve();
          });
        })
      );

      await Promise.all(
        horizontalArray.map(async (x) => {
          let result = {};
          for (let i = 0; i < props.colNum; i++) {
            let a = await horizontalCalculation(x.Formula, i, newhortotal);
            result[i] = a;
          }
          // console.log(result)

          props.setTotal((prevState) => ({
            ...prevState,
            [x.Code]: { ...prevState[x.Code], ...result },
          }));
        })
      );
    }
  };

  const tripleCalculateButton = async () => {
    try {
      for (let i = 0; i <= formData.length + 1; i++) {
        await calculateButton();
      }
    } catch (error) {
      console.error("Error during triple calculation:", error);
    }
  };

  return (
    <>
      {formData.map((heading, index) => (
        <div className="card mb-2" key={index}>
          <div className="card-header">
            <strong>{heading.DocumentName}</strong>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center col-sm-12 mb-3">
              <div className="col-sm-4">
                <label>
                  <strong>No. of Fiscal Years</strong>
                </label>
              </div>
              <div className="col-sm-4">
                {/* <Select
                options={SMEcolumns}
                onChange={(e) => handleColChange(e.value)}
                value={SMEcolumns.find((x) => x.value === colNum)}
              /> */}
              </div>
            </div>
            <hr />
            <div className="overflow-auto">
              {heading.AccountHeadings.map((x, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <div className="col-sm-4">
                    {x.IsStrong === true ? (
                      <strong>{x.Title}</strong>
                    ) : (
                      <span>{x.Title}</span>
                    )}
                  </div>

                  {Array.from({ length: props.colNum }, (_, colIndex) => (
                    <div key={colIndex} className="col-sm-2 mr-2">
                      {x.Type === "Input" ? (
                        <input
                          type="text"
                          className="form-control"
                          placeholder={x.Placeholder}
                          id={`${x.Code}-${colIndex}`} // Unique ID per column
                          value={
                            (props.inputField[x.Code] &&
                              props.inputField[x.Code][colIndex]) ||
                            ""
                          }
                          // readOnly={(index !== 0 && colIndex === 0)}
                          onChange={(e) =>
                            handleInputChange(x.Code, colIndex, e.target.value)
                          } // Update state with column index
                        />
                      ) : x.Type === "Formula" ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={calculateFormula(x.Formula, colIndex)}
                            id={`${x.Code}-${colIndex}`}
                            readOnly
                          />
                        </>
                      ) : x.Type === "TotalWithFormula" ? (
                        <>
                          <input
                            type="text"
                            className="form-control"
                            value={
                              props.total?.[x.Code]?.[colIndex]
                              // || inputField?.[x.Code]?.[colIndex]
                            }
                            id={`${x.Code}-${colIndex}`}
                            readOnly={x.Code !== "CUNEPRTRTOBSREEA"}
                          />
                        </>
                      ) : x.Type === "Dropdown" ? (
                        <select
                          className="form-control"
                          id={`${x.Code}-${colIndex}`}
                          onChange={(e) =>
                            handleInputChange(x.Code, colIndex, e.target.value)
                          }
                          value={
                            (props.inputField[x.Code] &&
                              props.inputField[x.Code][colIndex]) ||
                            ""
                          }
                        >
                          {/* {AudType.map((data, index) => (
                          <option key={index} value={data.value}>
                            {data.label}
                          </option>
                        ))} */}
                        </select>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* <button
                  type="button"
                  className="btn btn-sm btn-primary mr-2"
                  onClick={() => saveDetails()}
                >
                  Save
                </button> */}
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={() => tripleCalculateButton()}
            >
              Calculate
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Table;
