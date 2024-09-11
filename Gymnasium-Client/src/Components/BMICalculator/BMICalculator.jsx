import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();

    // Convert inputs to numeric values
    const heightCm = parseFloat(height);
    const weightKg = parseFloat(weight);

    // Validation check for positive values
    if (!heightCm || !weightKg || !age || heightCm <= 0 || weightKg <= 0) {
      setMessage("Please enter valid inputs.");
      return;
    }

    // BMI calculation formula
    const heightM = heightCm / 100;
    const calculatedBmi = (weightKg / (heightM * heightM)).toFixed(2);
    setBmi(calculatedBmi);

    // Display appropriate message based on BMI result
    if (calculatedBmi < 18.5) {
      setMessage("You are underweight.");
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setMessage("You have a healthy weight.");
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      setMessage("You are overweight.");
    } else {
      setMessage("You are obese.");
    }
  };

  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">BMI Calculator</h2>
        <p className="text-gray-400">
          BMI measures weight relative to height. It's a basic tool, not perfect, but a starting point. High BMI can signal health risks, but consult a doc for personalized advice.
        </p>
      </div>
      <div className="bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">BMI Calculator Chart</h3>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">BMI</th>
                <th className="text-left">Weight Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 18.5</td>
                <td>Underweight</td>
              </tr>
              <tr>
                <td>18.5 - 24.9</td>
                <td>Healthy</td>
              </tr>
              <tr>
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr>
                <td>30.0 and Above</td>
                <td>Obese</td>
              </tr>
            </tbody>
          </table>
          {bmi && (
            <div className="mt-4">
              <p className="text-xl font-bold">Your BMI: {bmi}</p>
              <p className="text-lg">{message}</p>
            </div>
          )}
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Calculate your BMI</h2>
          <p className="text-gray-400 mb-4">
            BMI: A Quick Snapshot. BMI (Body Mass Index) gives a rough estimate of body fat based on height and weight.
          </p>
          <form className="space-y-4" onSubmit={handleCalculate}>
            <input 
              type="text" 
              placeholder="Height/CM" 
              className="w-full bg-gray-700 rounded px-4 py-2"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Weight/kg" 
              className="w-full bg-gray-700 rounded px-4 py-2"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Age" 
              className="w-full bg-gray-700 rounded px-4 py-2"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button className="bg-red-500 text-white px-8 py-3 rounded-full" type="submit">
              Calculate
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
