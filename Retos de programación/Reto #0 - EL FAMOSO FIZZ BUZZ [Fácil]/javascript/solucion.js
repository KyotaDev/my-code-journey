for (let index = 0; index <= 100; index++) {
    if(index % 5 == 0 && index % 3 == 0){
        console.log(index, 'fizzbuzz');
    }
    else if(index % 5 == 0){
        console.log(index, 'buzz');
    }
    else if(index % 3 == 0){
        console.log(index, 'fizz');
    }else{
        console.log(index);
    }
}