const index = (req, res)=>{
        res.render("login.html");
};
const login = (req, res)=>{
    const user = {
        id :'soyoon1234',
        password:'soyoon5678',
    };
    if(user.id==req.body.id && user.password==req.body.password){
        console.log("Success");
        res.render("main.html");
    
    }else{
        res.send("아이디나 비밀번호가 틀렸습니다.");
    }
};

module.exports={
    index, login
}
