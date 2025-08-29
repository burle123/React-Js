import React, { useState, useEffect, useCallback, useRef } from "react";
import "./PasswordGenerator.css";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*(){}[]";
    let charSet = letters + (includeNumbers ? numbers : "") + (includeSymbols ? symbols : "");
    let newPass = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * charSet.length);
      newPass += charSet[randIndex];
    }
    setPassword(newPass);
  }, [length, includeNumbers, includeSymbols]);

  const copyToClipboard = () => {
    passwordRef.current.select();
    document.execCommand("copy");
    alert("Password copied!");
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="gen-container">
      <h1>Password Generator</h1>
      <div className="gen-inputs">
        <input
          type="text"
          readOnly
          value={password}
          ref={passwordRef}
          className="gen-password"
        />
        <button onClick={generatePassword} className="gen-btn">Generate</button>
        <button onClick={copyToClipboard} className="gen-btn">Copy</button>
      </div>
      <div className="gen-options">
        <div className="gen-option">
          <label>Length: {length}</label>
          <input
            type="range"
            min="6"
            max="64"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
          />
        </div>
        <div className="gen-option">
          <input
            type="checkbox"
            id="num"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers((prev) => !prev)}
          />
          <label htmlFor="num">Include Numbers</label>
        </div>
        <div className="gen-option">
          <input
            type="checkbox"
            id="sym"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols((prev) => !prev)}
          />
          <label htmlFor="sym">Include Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
