
let users = {    
    Alan: { online: false },
    Jeff: { online: true },
    Sarah: { online: false },
 
}
function chekOnline(users){
    let userOnline=[];
    for (let key in users) {
        if(users[key].online == true)
        userOnline.push(key)
    }
    return userOnline;
}

console.log('Now online : ' + chekOnline(users));


