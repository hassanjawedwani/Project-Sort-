const sortButton = document.getElementById('sort-button');
const inputs = [...document.getElementsByTagName('select')];


const updateUI = (array = []) => {
    array.forEach((elem, i) => {
    document.getElementById(`output-value-${i}`).textContent = elem;
    });
}

const bubbleSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length-1; j++) {
            console.log(array, array[j], array[j+1])
            if(array[j] > array[j+1]) {
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
    }
    return array;
}

const selectionSort = array => {
    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
        for(let j = i+1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
}

const insertionSort = array => {
    for(let i = 1; i < array.length; i++) {
        let j = i-1;
        const currValue = array[i];
        while (j>= 0 && array[j]>currValue) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = currValue;
    }
    return array;
}
const sortArray = (e) => {
    e.preventDefault();
    const inputValues = inputs.map(obj => Number(obj.value));
    const sortedArray = insertionSort([...inputValues]);
    updateUI(sortedArray);
}

sortButton.addEventListener('click', sortArray);