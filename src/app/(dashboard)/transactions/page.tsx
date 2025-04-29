import { TransactionsHeader } from "@/components/transactions/transactions-header";
import { TransactionsTable } from "@/components/transactions/transactions-table";
import { TransactionsPagination } from "@/components/transactions/transactions-pagination";
import { getTransactions } from "@/lib/data/transactions";

export default function TransactionsPage() {
  // mock data
  const transactions = getTransactions();
  const totalTransactions = 512;
  const currentPage = 1;

  return (
    <div className="container mx-auto py-6 space-y-6">
      <TransactionsHeader />
      <TransactionsTable transactions={transactions} />
      <div>
        <TransactionsPagination
          currentPage={currentPage}
          totalItems={totalTransactions}
          itemsPerPage={12}
        />
      </div>
    </div>
  );
}
