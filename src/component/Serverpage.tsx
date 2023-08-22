import React from 'react'
import { useState } from 'react';

const Serverpage = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [showInput, setShowInput] = useState(false);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setInputValue("");
      setShowInput(true);
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = () => {
      // Handle submission of the input value
      
    };
  
    return (
      <div>
        <div className="grid grid-cols-3 pt-5 items-end mb-6 w-[759.5px] m-auto ">
          <div className="h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
          <div className="text-center text-lg font-light">
            Choose from the Following
          </div>
          <div className="h-1 border-t-2 rounded border-[#AAB2C873] border-opacity-40"></div>
        </div>
        <div className="flex justify-center space-x-10">
          <button
            style={{
              width: 150,
              height: 50,
              margin: 20,
              border: "1px solid",
              borderRadius: 5,
              backgroundColor:
                selectedOption === "Aws" ? "blue" : "transparent",
              color: selectedOption === "Aws" ? "white" : "black",
            }}
            onClick={() => handleOptionClick("Aws")}
          >
            Aws
          </button>
         
          <button
            style={{
              width: 150,
              height: 50,
              margin: 20,
              borderRadius: 5,
              border: "1px solid",
              backgroundColor:
                selectedOption === "Github Repository " ? "blue" : "transparent",
              color: selectedOption === "Github Repository " ? "white" : "black",
            }}
            onClick={() => handleOptionClick("Github Repository ")}
          >
            Company
          </button>
        </div>
        {showInput && (
          <div className="mt-4 text-center">
            <input
              className="border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder={selectedOption + " Name"}
              value={inputValue}
              onChange={handleInputChange}
              style={{ marginTop: 150, padding: 15 }}
            />
            <button
              className="mt-2 bg-blue-500 text-black py-1 px-4 rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
              style={{
                width: 100,
                height: 50,
                margin: 20,
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
}

export default Serverpage