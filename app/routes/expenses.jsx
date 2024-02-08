import { Outlet } from "@remix-run/react";
import expensesStyles from '../styles/expenses.css'


export default function ExpensesLayout() {
    return (
        <main>
            <h2>Element</h2>
            <Outlet />
        </main>
    )
}

export function links() {
    return [{ rel: 'stylesheet', href: expensesStyles }]
}