const clientPath = 'C:/Users/User/Desktop/main/takoseeker/OYR_week1/client/src';
export async function loginPage(req, res){
    res.sendFile(clientPath + '/OYR_insta_login/index.html');
}
export async function mainPage(req, res){
    res.sendFile(clientPath + '/OYR_insta_page/index.html');
}