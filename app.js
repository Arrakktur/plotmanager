const express = require("express");
const sqlite3 = require("sqlite3").verbose();
 
// Создаем приложение
const app = express();
 
// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});

// Аутентификатор
class AuthService {
  
}

// Класс для работы с базой данных
class db{
  database = new sqlite3.Database('database.db', (err) => {
    if (err) return console.error(err.message);
    console.log('Connect to database');
  });

  /** Аутентификация/Авторизация по логину и паролю
   *
   * @returns string token 
   */
  checkAuth(login, password){
    let sql = `SELECT token FROM users WHERE login='${login}' AND password='${password}'`;
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        res(rows);
      });
    })
  }

  /**
   * Аутентификация по токену
   * 
   * @param {string} token 
   * 
   * @returns string checkToken
   */
  checkAuthJWT(token){
    let sql = `SELECT COUNT(*) FROM users WHERE token='${token}'`;
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        res(rows);
      });
    })
  }

  // Запрос на регистрацию
  registr(login, password){
    let sql = `SELECT login FROM users WHERE login='${login}'`;
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        if (rows.length <= 0){
          sql = `INSERT INTO users(login, password, token) VALUES('${login}', '${password}', '${password}')`;
          this.database.run(sql);
          res(true);
        } else {
          res(false);
        }
      });
    })
  }

  // Получение списка проектов
  getProjectList(){
    let sql = 'SELECT id, name, description FROM projects';
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        res(rows);
      });
    })
  }

  // Добавление нового проекта
  addProject(project){
    let sql = `INSERT INTO projects(name, description) VALUES('${project.name}', '${project.description}')`;
    return new Promise((res, rej) => {
      this.database.run(sql);
      res(true);
    })
  }

  // Получение проекта по id
  getProject(id){
    let sql = `SELECT * FROM projects WHERE id=${id}`;
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        res(rows);
      });
    })
  }

  // Обновление информации о проекте
  updateProject(project){
    
  }

  // Обновление информации о персонаже
  updatePerson(person){

  }

  // Получение списка персонажей
  getPersons(id = 1){
    let sql = `SELECT persons.id, name, description FROM persons JOIN "persons-projects" pp ON pp.person_id = persons.id WHERE pp.projects_id=${id}`;
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        res(rows);
      });
    })
  }

  // Добавление нового персонажа
  addPerson(person){
    let sql = `INSERT INTO persons(id, name, description) VALUES(NULL, '${person.name}', '${person.description}')`;
    return new Promise((res, rej) => {
      this.database.run(sql);
      sql = `SELECT MAX(id) FROM users`;

      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        console.log(rows);

        sql = `INSERT INTO "persons-projects" (person_id, projects_id) VALUES(LAST_INSERT_ROWID(), ${person.id});`
        this.database.run(sql);
        res(true);
      });
    })
  }

  // Получение персонажа по id
  getPerson(id){
    let sql = `SELECT * FROM persons WHERE id=${id}`;
    return new Promise((res, rej) => {
      this.database.all(sql, [], (err, rows) => {
        if (err) throw err;
        res(rows);
      });
    })
  }
}

// Объект базы данных
const database = new db();

// Запросы к серверу
app.post('/post', urlencodedParser, (req, res) => {
    // Выводим запрос
    console.log(req.body);

    // Установка заголовков
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //dev
    // res.setHeader('Access-Control-Allow-Origin', 'http://91.201.254.176:2113'); //prod
    res.setHeader('Access-Control-Allow-Origin', '*'); //test
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requesred-With, Content-type, Accept, x-client-key, x-client-token, x-client-secret');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Авторизация
    if (req.body.action == 'auth'){
      let user = JSON.parse(req.body.data).user;
      database.checkAuth(user.login, user.password).then(
        result => { 
          if(result.length = 1){
            res.send(JSON.stringify(result));
          } else {
            res.send(false);
          }
        }
      )
    }

    // Регистрация 
    if (req.body.action == 'reg'){
      let user = JSON.parse(req.body.data).user;
      database.registr(user.login, user.password).then(
        result => { 
          if(result.length = 1){
            res.send(JSON.stringify(result));
          } else {
            res.send(false);
          }
        }
      )
    }

    // Запросы требующие авторизацию
    if(req.headers.authorization){
      console.log('token:')
      console.log(req.headers.authorization);
    }
    
    // Добавление нового проекта
    if (req.body.action == 'addProject'){
      let project = JSON.parse(req.body.data).project;
      database.addProject(project).then(
        result => {
          res.send(JSON.stringify(result));
        }
      )
    }

    // Добавление нового персонажа
    if (req.body.action == 'addPerson'){
      let person = JSON.parse(req.body.data).person;
      database.addPerson(person).then(
        result => {
          res.send(JSON.stringify(result));
        }
      )
    }

    // Отправка пользователю списка проектов
    if (req.body.action == 'getProjects'){
      database.getProjectList().then(
        result => {
          res.send(JSON.stringify(result));
        }
      )
    }

    // Отправка пользователю проект по id
    if (req.body.action == 'getProject'){
      let id = JSON.parse(req.body.data).id;
      if (id !== undefined){
        database.getProject(id).then(
          result => {
            res.send(JSON.stringify(result));
          }
        )
      }
    }

    // Получение списка персонажей
    if (req.body.action == 'getPersons'){
      let id = JSON.parse(req.body.data).id;
      database.getPersons(id).then(
        result => {
          res.send(JSON.stringify(result));
        }
      )
    }

    // Получение персонажа по id
    if (req.body.action == 'getPerson'){
      let id = JSON.parse(req.body.data).id;
      database.getPerson(id).then(
        result => {
          res.send(JSON.stringify(result));
        }
      )
    }
})

// Это нужно чтобы отдать сайт
app.use(express.static(__dirname + "/dist/plotmanager"));

// Отдаем сайт
app.use(function (request, response) {
  response.sendFile(__dirname + "/dist/plotmanager/index.html");
});

// Запуск сервера
app.listen(3000);