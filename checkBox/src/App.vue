<template>
  <div>
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>

    <div class="form">
      <div>Ваш филиал <span> *</span></div>
      <label for="">Онлайн</label>
      <select name="" id="">
        <option selected>Выберите город</option>
      </select>
      <div>Тема обращения <span>*</span></div>
      <input placeholder="Другое" type="text" />
      <div>Описание проблемы <span>*</span></div>
      <input type="text" />
      <div>
        Загрузка документов
        <p>
          Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее
          решить проблему.
        </p>
      </div>
      <input type="file" />
      <button>Отправить</button>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.form {
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
</style>
