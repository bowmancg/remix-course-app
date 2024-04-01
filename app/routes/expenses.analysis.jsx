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
  import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
  import Chart from '~/components/expenses/Chart';
  
  export default function ExpensesAnalysisPage() {
    return (
      <>
      <header>
        <ExpensesHeader />
      </header>
      <main>
        <Chart expenses={DUMMY_EXPENSES} />
        <ExpenseStatistics expenses={DUMMY_EXPENSES} />
      </main>
      </>
    );
  }