export function randomOptions (option){

    for(i = 0; i< option.length - 1; i++){
        let j = Math.floor(Math.random() * 4);
        let temp = option[i];
            option[i] = option[j];
            option[j] = temp;
    }
    return option
}