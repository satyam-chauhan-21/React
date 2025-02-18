//-----------------------------------------------------------------------------------------------//
//        this code is generated from AI and iss code me useCallback ka use nahi huaa hai.
//-----------------------------------------------------------------------------------------------//
/*
import { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+{}[]';

  // 🔴 Without useCallback
  const generatePassword = () => {
    let chars = lowercaseLetters + uppercaseLetters;
    if (includeNumbers) chars += numbers;
    if (includeSpecialChars) chars += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied!');
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 border rounded"
          placeholder="Generate password"
        />
        <button
          onClick={copyPassword}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Copy
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Password Length: {length}
          <input
            type="range"
            min="8"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full mt-1"
          />
        </label>
      </div>

      <div className="mb-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
*/



//-----------------------------------------------------------------------------------------------//
//        this code is generated from AI and iss code me useCallback ka use huaa hai.
//-----------------------------------------------------------------------------------------------//
import { useState, useCallback } from 'react';

function PasswordGenerator() {
  // States to manage password, length, and options
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  // Character sets
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+{}[]';

  // Password generate karne ka function (useCallback se optimize)
  const generatePassword = useCallback(() => {
    let chars = lowercaseLetters + uppercaseLetters;
    if (includeNumbers) chars += numbers;
    if (includeSpecialChars) chars += specialChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  }, [length, includeNumbers, includeSpecialChars]);

  // Copy to clipboard function
  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert('Password copied!');
  }, [password]);

  return (
    <div className="container mx-auto p-4 max-w-md bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
      
      {/* Password Display */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={password}
          readOnly
          className="w-full p-2 border rounded"
          placeholder="Generate password"
        />
        <button
          onClick={copyPassword}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Copy
        </button>
      </div>

      {/* Length Slider */}
      <div className="mb-4">
        <label className="block mb-2">
          Password Length: {length}
          <input
            type="range"
            min="8"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full mt-1"
          />
        </label>
      </div>

      {/* Checkboxes */}
      <div className="mb-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>

      {/* Generate Button */}
      <button
        onClick={generatePassword}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;


