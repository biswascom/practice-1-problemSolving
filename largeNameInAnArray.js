const array = ['Jahanara Begum', 'Arian', 'Maria', 'Atif Abdullah Bin Ashraf', 'Al-Amin', 'Jitu', 'Shohag', 'Ariful'];

function largeNameInAnArray(namesArray){
    let largeName = '';
    // let largeName = array[0];
    for(let i = 0; i < array.length; i++){
        const name = namesArray[i];
        if(name.length > largeName.length) {
            largeName = name;
        }
    }
    return largeName;
}

const result = largeNameInAnArray(array);
console.log(result);