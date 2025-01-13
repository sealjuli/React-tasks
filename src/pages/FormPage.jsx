import { useState } from "react";
import { useForm } from "react-hook-form";
import ModalWindow from "../components/ModalWindow";

const FormPage = () => {
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
    <div className="outlet text">
      <h2>Forms</h2>
      <p>
        {`В React существует несколько способов использования форм в приложении, в зависимости от
        потребностей и предпочтений разработчика. Существуют библиотеки, такие как React Hook Form и Formik,
        которые предоставляют более высокоуровневые решения для работы с формами.
        Они упрощают управление состоянием, валидацией, обработкой отправки и другими аспектами работы с формами.`}
      </p>

      <p>{`React Hook Form - это библиотека, которая значительно упрощает процесс работы с формами в React
      приложениях. Она позволяет создавать интерактивные и дружественные формы с минимумом лишнего кода.`}</p>

      <p>{`Formik - это еще одна библиотека для управления формами в приложениях на React. Её основная цель -
      упростить и облегчить процесс работы с формами, сбора данных от пользователя и их валидации.`}</p>

      <p>{`Пример кода создания формы с помощью библиотеки React Hook Form: `}</p>

      <pre className="code">
        <code>
          {`import { useForm } from 'react-hook-form' // Импорт библиотеки

const { register, handleSubmit, formState: { errors } } = useForm() // Инициализация Хука

// Обработка Отправки
const onSubmit = (data) => {
    console.log(data);
  };

// Создание Формы
<form onSubmit={handleSubmit(onSubmit)}>
  {/* Поля формы */}
  <input {...register('name')} />
  <p>{errors.age?.message}</p>
  <button type="submit">Отправить</button>
</form>`}
        </code>
      </pre>

      <b>
        <p>{`Реализованная форма для заполнения: `}</p>
      </b>

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
        <ModalWindow
          showModal={showModal}
          setShowModal={setShowModal}
          data={data}
        />
      </div>
    </div>
  );
};

export default FormPage;
