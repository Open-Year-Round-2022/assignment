const httpURI = 'http://localhost:3000';

export async function getPostings(){
    const response = await fetch(`${httpURI}`,{
        method : 'GET',
        mode:"cors"
    });
    return response.json();
}

export async function getAposting(id){
    console.log(id);
    const comments = await fetch(`${httpURI}/${id}`,{
        method : 'GET',
        mode:"cors"
    });
    return comments.json();
}


export async function postComment(id, cmtData){
    const data = {user_ID: 1, text: cmtData};
    const response = await fetch(`${httpURI}/${id}`,{
        method : 'POST',
        mode:"cors",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(data)
    });
    const comments = await response.json();
    console.log(comments);
    return comments;
}

export async function plusLike(id){
    const response = await fetch(`${httpURI}/${id}`,{
        method : 'PUT',
        mode:"cors"
    });
    return response.json();
}
export async function disLike(id){
    const response = await fetch(`${httpURI}/${id}/re`,{
        method : 'PUT',
        mode:"cors"
    });
    return response.json();
}