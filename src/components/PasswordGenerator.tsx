import { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setincludeLowercase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let characterSet = numbers;
    if (includeUppercase) characterSet += uppercase;
    if (includeLowercase) characterSet += lowercase;
    if (includeSymbols) characterSet += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full p-4 bg-soft-white">

      <h1 className="text-2xl font-bold mb-4 text-deep-blue">Custom Password Generator</h1>

      <div className="m-4 p-4">
        <p className="p-4 border-2 border-deep-blue rounded min-w-96 text-center text-deep-blue">{password}</p>
      </div>
      
      <div className="mb-4 flex justify-center gap-4">
        <label className="mr-2">Length</label>
        <input
          type="range"
          className="p-1 border rounded"
          value={length ? length : 8}
          onChange={(e) => setLength(parseInt(e.target.value))}
          min="4"
          max="20"
        />
      </div>

      <div className='flex justify-center gap-4 py-6 px-8'>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="checkbox"
            className="mr-1"
            checked={includeLowercase}
            onChange={(e) => setincludeLowercase(e.target.checked)}
          />
          Include Lowercase
        </label>
      </div>

      <div className="mb-4">
        <label className="mr-2">
          <input
            type="checkbox"
            className="mr-1"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          Include Uppercase
        </label>
      </div>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="checkbox"
            className="mr-1"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      </div>

      <button
        className="bg-deep-blue text-soft-white px-4 py-2 rounded"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      
    </div>
  );
};

export default PasswordGenerator;