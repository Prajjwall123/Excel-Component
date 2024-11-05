import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

function Table(props) {
  const [formData] = useState(props.jsonData);
  const [isDarkMode]=useState(props.isDarkMode);
  // const [setIsDarkMode] = useState(false);

  // const toggleTheme = (value) => {
  //   const newTheme = !value;
  //   setIsDarkMode(newTheme);
  //   document.body.classList.toggle("dark-theme", newTheme);
  //   localStorage.setItem("darkTheme", newTheme);
  // };

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("darkTheme") === "true";
  //   setIsDarkMode(savedTheme);
  //   document.body.classList.toggle("dark-theme", savedTheme);
  // }, []);

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

  const borderRadiusStyle = { borderRadius: 2 }


  return (
    <>
    <div className={`p-3 border ${isDarkMode ? "border-light bg-secondary text-light" : "border-dark bg-light text-dark"}`}>
    <div className="d-flex flex-row-reverse mb-2">
        <div className="App d-flex flex-row">
      {/* <h3 className="p-3">{isDarkMode ? "Dark Mode" : "Light Mode"}</h3> */}
      {/* <ToggleButton className="p-3"
        value={isDarkMode}
        thumbStyle={{ borderRadius: 2 }}
        trackStyle={{ borderRadius: 2 }}
        onToggle={() => toggleTheme(isDarkMode)}
      /> */}
    </div>
        </div>
      {formData.map((heading, index) => (
        <div className={`card mb-2 ${isDarkMode ? "bg-dark text-light" : "bg-white text-dark"}`} key={index}>
          <div className={`card-header ${isDarkMode ? "bg-success text-white" : "bg-primary text-white"} fs-3`}>
          <strong>{heading.DocumentName}</strong>
          </div>
          <div className="card-body">
            <div className="d-flex align-items-center col-sm-12 mb-3 fs-4">
              <div className="col-sm-3 me-2">
                <label>
                  <strong>No. of Fiscal Years</strong>
                </label>
              </div>
              <div className="col-sm-3 me-2">
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
              <div
                key={index}
                className={`d-flex align-items-center ${x.IsStrong ? (isDarkMode ? "bg-light text-dark p-1 rounded-2 mb-1 mt-1" : "bg-dark text-white p-1 rounded-2 mb-1 mt-1") : ""}`}
                >
                <div className="col-sm-4">
                  {x.IsStrong ? (
                    <strong className={`${isDarkMode ? "text-dark" : "text-white"}`}>{x.Title}</strong>
                  ) : (
                    <span>{x.Title}</span>
                  )}
                </div>
                  {Array.from({ length: props.colNum }, (_, colIndex) => (
                    <div key={colIndex} className="col-sm-2 ">
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
                            className="form-control "
                            style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
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
                            style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
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
            <div className="text-center p-4 ">
              <button
                type="button"
                className={`btn btn-block ${isDarkMode ? "btn-primary" : "btn-success"}`}
                onClick={() => tripleCalculateButton()}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Table;
