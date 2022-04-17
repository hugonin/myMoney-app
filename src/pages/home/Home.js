import { useAuth } from "../../hooks/useAuth";
import { useCollection } from "../../hooks/useCollection";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";

import styles from "./Home.module.css";

export default function Home() {
  const { user } = useAuth();
  const { documents, error } = useCollection(
    "transactions", 
    [
      "uid",
      "==",
      user.uid,
    ],
    [
      "createdAt",
      "desc"
    ]
    );
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
