import React from "react";

function ExpenseTable({ expenses, onDeleteExpense, onSort, sortBy, sortDirection }) {
    const getSortIcon = (key) => {
      if (sortBy !== key) return '';
      return sortDirection === 'asc' ? ' ▲' : ' ▼';
    };
  
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => onSort('name')} style={{ cursor: 'pointer' }}>
              Expense{getSortIcon('name')}
            </th>
            <th>Description</th>
            <th onClick={() => onSort('category')} style={{ cursor: 'pointer' }}>
              Category{getSortIcon('category')}
            </th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button className="delete-button" onClick={() => onDeleteExpense(expense.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  export default ExpenseTable