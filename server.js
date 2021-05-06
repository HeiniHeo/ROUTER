const express = require('express');
const {sequelize} = require('./models'); //models>index에서 db를 불러왔다
// const {User} = require('./models');
const router = require('./routers/index');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
});

/* sequelize.sync => new Promise 객체로 반환이 된다.
성공 reserve 실패 reject */
sequelize.sync({force:false})
.then(()=>{
    console.log('DB 접속 성공')
}).catch(()=>{
    console.log('DB 접속 실패')
})

app.use('/',router);

app.listen(3000,()=>{
    console.log('serverstart port 3000')
});