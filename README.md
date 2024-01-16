# Expense Tracker App

## Overview

This repository contains the source code for an Expense Tracker app built with React. The app allows users to track their income and expenses, add transactions, view transaction history, and manage their overall balance.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [GlobalProvider](#globalprovider)
  - [Reducer Function](#reducer-function)
  - [TransactionList](#transactionlist)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new transactions, specifying the type (income or expense), description, and amount.
- View a list of all transactions, including details such as description, amount, and type.
- See the total balance and individual balances for income and expenses.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- A code editor (e.g., Visual Studio Code)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OmorFaruk63/-Expense-Tracker-.git

   cd -Expense-Tracker-

   yarn

   yarn dev
   ```
## Components

### App

The main entry point of the application. It renders the global provider and various components, including `TotalBalance`, `Balance`, `Add_Transection`, and `TransactionList`.

### GlobalProvider

A context provider component that uses the `useReducer` hook to manage the state of transactions. It also utilizes the `useEffect` hook to persist transactions in local storage.

### Reducer Function

Defines the state transitions for the application based on different actions. Actions include adding transactions, deleting transactions, and updating/editing transactions.

### TransactionList

Displays a list of transactions by consuming the global context. It includes conditional rendering for cases where there are no transactions to display.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/OmorFaruk63/-Expense-Tracker-.git
## License

This project is licensed under the [MIT License](LICENSE).
