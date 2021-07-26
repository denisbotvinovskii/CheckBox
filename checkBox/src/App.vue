<template>
  <div>
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>

    <div class="form">
      <div>Ваш филиал <span> *</span></div>
      <select name="" id="">
        <option selected>Выберите город</option>
      </select>
      <div>
        <input type="checkbox" />
        <label for="">Онлайн</label>
      </div>
      <div>
        Тема обращения <span>*</span>
        <div>
          <input type="checkbox" />
          <label for="">Недоволен качеством услуг</label>
        </div>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">Расторжение договора</label>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">Не приходит письмо активации на почту</label>
      </div>
      <div>
        <input type="checkbox" />
        <label for="">Не работает личный кабинет</label>
      </div>
      <input placeholder="Другое" type="text" />
      <div>Описание проблемы <span>*</span></div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div>
        Загрузка документов
        <p>
          Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее
          решить проблему.
        </p>
      </div>
      <input type="file" />
      <div>
        <button>Отправить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
//
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

  margin-top: 30px;
}
.form {
  text-align: left;
  padding-left: 25px;
  padding-bottom: 25px;
  padding-top: 15px;
  width: 60%;
  height: 100%;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  display: inline-block;
}
span {
  color: orange;
}
button {
  background-color: orange;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.problemBox {
  height: 100%;
  width: 10vh;
}
div {
  margin-top: 10px;
}
</style>
