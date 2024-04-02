const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'First Expense',
      amount: 12.99,
      date: new Date().toISOString(),
    },
    {
      id: 'e2',
      title: 'Second Expense',
      amount: 16.99,
      date: new Date().toISOString(),
    },
  ];
  
  import ExpensesHeader from '~/components/navigation/ExpensesHeader';
  import { Link, Outlet } from '@remix-run/react';
  import ExpensesList from '~/components/expenses/ExpensesList';
  import expensesStyles from '~/styles/expenses.css';
import { FaDownload, FaPlus } from 'react-icons/fa';
  
  export default function ExpensesLayout() {
    return (
      <>
        <Outlet />
        <header>
          <ExpensesHeader />
        </header>
        <main>
          <section id='expenses-actions'>
            <Link to="add">
              <FaPlus />
              <span>Add Expense</span>
            </Link>
            <a href="/expenses/raw">
              <FaDownload />
              <span>Load Raw Data</span>
            </a>
          </section>
          <ExpensesList expenses={DUMMY_EXPENSES} />
        </main>
      </>
    );
  }
  
  export function links() {
    return [{ rel: 'stylesheet', href: expensesStyles }];
  }