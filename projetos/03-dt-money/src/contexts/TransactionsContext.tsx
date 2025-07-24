import { createContext, useEffect, useState, type ReactNode } from "react";

interface Transaction {
  id: number;
  description: string;
  price: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
}

interface TransactionsProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  }
  useEffect(() => {
    loadTransactions();
  }, []);
  return (
    <>
      <TransactionsContext.Provider value={{ transactions }}>
        {children}
      </TransactionsContext.Provider>
    </>
  );
}
