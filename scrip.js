function calculateGrade() {
    
    const number1 = parseFloat(document.getElementById('tugas').value);
    const number2 = parseFloat(document.getElementById('UTS').value);
    const number3 = parseFloat(document.getElementById('UAS').value);

    if(number1 > 100 || number2 > 100 || number3 > 100){
        document.getElementById('result').innerText = 'Nilai input tidak valid';

    }else{
    const weighted1 = number1 * 0.3;
    const weighted2 = number2 * 0.3;
    const weighted3 = number3 * 0.4;

    
    const average = weighted1 + weighted2 + weighted3;



    
    let grade;
    if (average >= 90 && average <= 100) {
        grade = "A";
    } else if (average >= 80 && average <= 89) {
        grade = "B";
    } else if (average >= 70 && average <= 79) {
        grade = "C";
    } else if (average >= 60 && average <= 69) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    document.getElementById('result').innerText = `Rata-rata: ${average.toFixed(2)}, Nilai: ${grade}`;
}  
    
   
}
