let DayOfWeek = prompt('Введіть номер дня тижня ( 1 - 7 )');

function getDay(DayOfWeek){
    switch(DayOfWeek){
        case '1': return ('Понеділок');
        case '2': return ('Вівторок');
        case '3': return ('Середа');
        case '4': return ('Четвер');
        case '5': return ("П'ятниця");
        case '6': return ('Субота');
        case '7': return ('Неділя');
    }
}
 console.log('Цей день - ' + getDay(DayOfWeek));
