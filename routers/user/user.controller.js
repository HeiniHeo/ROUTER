const {User} = require('../../models/index');
const Sequelize = require('sequelize');

let user = (req,res)=>{
    res.render('./index.html');
}

let join = (req,res)=>{
    res.render('./user/join.html');
}

let login = (req,res)=>{
    res.render('./user/login');
};

let info = async (req,res)=>{
    let userList = await User.findAll({
        attributes:['id','userid','userpw','username','gender','userimage',
        [Sequelize.fn('date_format',Sequelize.col('userdt'), '%Y-%m-%d'),'userdt']]
    });
    res.render('./user/info.html',{
        list:userList,
    });
}

module.exports = {
    user:user,
    join:join,
    login:login,
    info:info,
}