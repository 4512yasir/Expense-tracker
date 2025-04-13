import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.date) {
      alert('Please fill out all required fields.');
      return;
    }
    onAddExpense({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ name: '', description: '', category: '', amount: '', date: '' });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input 
      type="text" name="name" 
      placeholder="Enter expense name" 
      onChange={handleChange}
       value={formData.name} />
      <input 
      type="text"
       name="description"
        placeholder="Enter expense description"
         onChange={handleChange} 
         value={formData.description} />
      <input 
      type="text"
       name="category" 
       placeholder="Enter category"
        onChange={handleChange} 
        value={formData.category} />
      <input 
      type="number" 
      name="amount" 
      placeholder="Enter amount" 
      onChange={handleChange} 
      value={formData.amount} />
      <input type="date" name="date" onChange={handleChange} value={formData.date} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
