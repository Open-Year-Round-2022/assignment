const output = {
    index : (req, res)=>{
        res.render("index.html");
    },
    main:(req, res)=>{
        res.render("main.html");
    },
}

const login = (req, res)=>{
    const user = {
        id :'soyoon1234',
        password:'soyoon5678',
    };
    if(user.id==req.body.id && user.password==req.body.password){
        res.render("main.html");
    
    }else if(user.id!=req.body.id){
        res.send("입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.");
    }else if(user.id==req.body.id && user.password!=req.body.password){
        res.send("잘못된 비밀번호입니다. 다시 확인하세요.");
    }
};

module.exports={
    output, login
}
