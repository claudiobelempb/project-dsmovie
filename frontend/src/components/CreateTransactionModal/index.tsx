import { FormEvent, useState, useContext } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { ButtonDefault } from "../ButtonDefault";
import { InputDefault } from "../InputDefault";
import { FaTimes } from "react-icons/fa";
import styles from "./styles.module.scss";

import ImageEntradas from "../../assets/images/dtmoney/entradas.svg";
import ImageSaidas from "../../assets/images/dtmoney/saidas.svg";
import { ICreateTransactionModal } from "./ICreateTransactionModal";
import { useTransactions } from "../../hooks/useTransactions";

const CreateTransactionModal: React.FC<ICreateTransactionModal> = ({
  isCreateOpenModal,
  onCreateRequestCloseModal,
}) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onCreateRequestCloseModal();
  }

  return (
    <Modal
      isOpen={isCreateOpenModal}
      onRequestClose={onCreateRequestCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form onSubmit={handleCreateTransaction}>
        <div className="dflex dflex__between">
          <h2>Cadastrar transação</h2>
          <ButtonDefault
            id="close"
            type="button"
            size="close"
            onClick={onCreateRequestCloseModal}
            className=""
          >
            <FaTimes width={32} height={32} className="fa fa-times"></FaTimes>
          </ButtonDefault>
        </div>
        <InputDefault
          label="Titulo"
          type="text"
          id="titulo"
          placeholder="Titulo"
          className="bgcolor__gray_900"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputDefault
          label="Preço"
          type="number"
          id="valor"
          placeholder="Valor"
          className="bgcolor__gray_900"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="grid__2">
          <ButtonDefault
            className={`bgcolor__gray_200 bgcolor__gray_200_border ${
              type === "deposit" ? "deposit" : ""
            }`}
            title="Entrada"
            type="button"
            size="small"
            onClick={() => {
              setType("deposit");
            }}
          >
            <Image width={24} src={ImageEntradas} alt="Saidas" />
          </ButtonDefault>
          <ButtonDefault
            className={`bgcolor__gray_200 bgcolor__gray_200_border ${
              type === "withdraw" ? "withdraw" : ""
            }`}
            title="Saída"
            type="button"
            size="small"
            onClick={() => setType("withdraw")}
          >
            <Image width={24} src={ImageSaidas} alt="Saidas" />
          </ButtonDefault>
        </div>
        <InputDefault
          label="Categoria"
          type="text"
          id="name"
          placeholder="Categoria"
          className="bgcolor__gray_900"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <ButtonDefault
          className={`bgcolor__green_300`}
          title="Cadastrar"
          type="submit"
          size="full"
          onClick={() => console.log("Click")}
        />
      </form>
    </Modal>
  );
};

export { CreateTransactionModal };
