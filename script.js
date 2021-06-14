function warning_1(one, two){
    let output = one + two;
    alert(one + ' + ' + two + ' = ' + output);
    console.log(typeof(output));
}
warning_1(1,5);

function warning_2(one, two){
    let output = one + two;
    alert(one + ' + ' + two + ' = ' + output);
    console.log(typeof(one), typeof(two));
}
warning_2(1, ' Hello');

function warning_3(one, two){
    let output = one + two;
    alert(one + ' + ' + two + ' = ' + output);
    console.log(typeof(one), typeof(two));
}
warning_3('Hello', ' World!');
