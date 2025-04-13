import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import './Style/App.css';

function App() {
  // expense
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: 'fare',
      description: 'TRANSPORT TO WORK',
      category: 'Transport',
      amount: 100,
      date: '2025-04-08',
    },
    {
      id: 2,
      name: 'taxes',
      description: 'power taxes',
      category: 'utilities',
      amount: 2000,
      date: '2025-04-05',
    },
    {
      id: 3,
      name: 'Buy shoes',
      description: 'Add to my shoe collection',
      category: 'personal',
      amount: 3500,
      date: '2025-04-06',
    },
    {
      id: 4,
      name: 'Buy book',
      description: 'Add to my book collection',
      category: 'growth',
      amount: 10000,
      date: '2025-04-07',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
// adding exepense
  const handleAddExpense = (newExpense) => {
    const expenseWithId = { ...newExpense, id: Date.now() };
    setExpenses((prev) => [...prev, expenseWithId]);
  };
//filtering when searched
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
// delete expense
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };
  // sorting
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  //handling sorting
  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
  };
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortBy) return 0;
    const aVal = a[sortBy].toLowerCase?.() || a[sortBy];
    const bVal = b[sortBy].toLowerCase?.() || b[sortBy];
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
  
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <div className="left-panel">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-panel">
          <SearchBar onSearchChange={handleSearchChange} />
          <ExpenseTable
  expenses={sortedExpenses}
  onDeleteExpense={handleDeleteExpense}
  onSort={handleSort}
  sortBy={sortBy}
        sortDirection={sortDirection}
         />

        </div>
      </div>
    </div>
  );
}

export default App;
