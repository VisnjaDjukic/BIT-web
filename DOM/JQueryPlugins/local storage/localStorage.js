
saveData = (key, value) => {
    localStorage.setItem(key, value);
}

readData = (key) => {

    if (key != undefined) {
        console.log(localStorage.getItem(key));
    }
    else {
        console.log('There is no data!');
    }
}
removeData = (key) => {
    localStorage.removeItem(key);
}


saveData('djevojcica', 'mira');
saveData('visnja', 'fina');
saveData();
removeData(undefined);
readData('djevojcica');


