import { useState } from "react";
import { useForm } from "react-hook-form";
import ModalWindow from "./components/ModalWindow";
import "./App.css";

const RegistrationForm = () => {
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setShowModal(true);
    setData(data);
    reset();
  };

  const watchPassword = watch("password");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Имя </label>
        <input
          {...register("name", {
            required: "Имя - обязательное поле",
          })}
        />
        <br></br>
        <label>Email </label>
        <input
          type="email"
          {...register("email", {
            required: "Email - обязательное поле",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />
        <br></br>
        <label>Пароль </label>
        <input
          type="password"
          {...register("password", {
            required: "Укажите пароль",
            pattern: {
              value: /^(?=.*[A-Z]).{6,}$/,
              message:
                "Минимальная длина пароля 6 символов, в пароле должна быть хотя бы одна заглавная латинская буква",
            },
          })}
        />
        <br></br>
        <label>Подтвердите пароль </label>
        <input
          type="password"
          {...register("confirm_password", {
            required: "Подтвердите пароль",
            validate: (value) => {
              return value === watchPassword || "Пароли не совпадают"; // Проверка совпадения пароля
            },
          })}
        />
        <br></br>
        <label>Дата рождения </label>
        <input
          type="date"
          {...register("birthday", {
            required: "Укажите дату рождения",
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: "Введите корректную дату рождения",
            },
          })}
        />
        <br></br>
        <label>Пол </label>
        <span>Мужской</span>
        <input
          type="radio"
          {...register("gender", { required: "Выберите пол" })}
          value="male"
        />
        <span>Женский</span>
        <input
          type="radio"
          {...register("gender", { required: "Выберите пол" })}
          value="female"
        />
        <br></br>
        <label>Номер телефона </label>
        <input
          placeholder="+375(29)999-99-99"
          {...register("phone", {
            required: "Укажите номер телефона",
            pattern: {
              value: /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
              message:
                "Введите корректный номер телефона в формате +375(29)999-99-99",
            },
          })}
        />
        <p style={{ color: "red" }}>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.confirm_password?.message ||
            errors.birthday?.message ||
            errors.gender?.message ||
            errors.phone?.message}
        </p>
        <button type="submit">Зарегестрироваться</button>
      </form>
      {showModal && (
        <ModalWindow
   showModal={showModal}
       setShowModal={setShowModal}
    data={data}
 />
      )}
    </div>
  );
};

export default RegistrationForm;
