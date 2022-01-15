import Image from "next/image";
import styles from "./styles.module.scss";
import { useTransactions } from "../../hooks/useTransactions";

import ImageEntradas from "../../assets/images/dtmoney/entradas.svg";
import ImageSaidas from "../../assets/images/dtmoney/saidas.svg";
import ImageTotal from "../../assets/images/dtmoney/total.svg";
import { TableDefault } from "../../components/TableDefault";
import { formatValue } from "../../utils/formatValue";

const SummaryMoney: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "deposit":
          acc.deposit += transaction.amount;
          acc.total += transaction.amount;
          return acc;
        case "withdraw":
          acc.withdraw += transaction.amount;
          acc.total -= transaction.amount;
          return acc;
        default:
          return acc;
      }
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <>
      <main className={`container ${styles.main__container}`}>
        <div className="content">
          <div className="grid__3">
            <article className={`bgcolor__white_100`}>
              <div className={`dflex dflex__between`}>
                <h2>Entradas</h2>
                <Image src={ImageEntradas} alt="Entradas" />
              </div>
              <strong className={`${styles.deposit}`}>
                {formatValue(summary.deposit)}
              </strong>
            </article>
            <article className={`bgcolor__white_100`}>
              <div className={`dflex dflex__between`}>
                <h2>Saídas</h2>
                <Image src={ImageSaidas} alt="Saidas" />
              </div>
              <strong className={`${styles.withdraw}`}>
                {summary.withdraw ? `- ${formatValue(summary.withdraw)}` : ""}
              </strong>
            </article>
            <article className={`bgcolor__green_300`}>
              <div className={`dflex dflex__between`}>
                <h2>Total</h2>
                <Image src={ImageTotal} alt="Total" />
              </div>
              <strong>{formatValue(summary.total)}</strong>
            </article>
          </div>
        </div>

        <div className="content">
          <div className="grid__1">
            <TableDefault />
          </div>
        </div>
      </main>
    </>
  );
};

export default SummaryMoney;
