import { useTransactions } from "../../hooks/useTransactions";
import { formatDate } from "../../utils/formatDate";
import { formatValue } from "../../utils/formatValue";
import styles from "./styles.module.scss";

const TableDefault: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <div className={`${styles.table__container}`}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td
                  className={
                    transaction.type === "deposit"
                      ? styles.deposit
                      : styles.withdraw
                  }
                >
                  {transaction.type === "deposit"
                    ? `R$ ${formatValue(transaction.amount)}`
                    : `- R$ ${formatValue(transaction.amount)}`}
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.createAt)}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>Desenvolvimento de site</td>
            <td className={styles.deposit}>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Hambúrguer</td>
            <td className={styles.withdraw}>- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className={styles.withdraw}>- R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className={styles.deposit}>R$ 5.400,00</td>
            <td>Venda</td>
            <td>15/03/2021</td>
          </tr> */}
        </tbody>
        {/* <tfoot>
          <tr>
            <td>Título</td>
            <td>Preço</td>
            <td>Categoria</td>
            <td>Data</td>
          </tr>
        </tfoot> */}
      </table>
    </div>
  );
};

export { TableDefault };
