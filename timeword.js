const obj = {
    'zero':'00',
    'oh one':'01',
    'oh two':'02',
    'oh three':'03',
    'oh four':'04',
    'oh five' :'05',
    'oh six' :'06',
    'oh seven' :'07',
    'oh eight' :'08',
    'oh nine' :'09',
    'ten' :'10',
    'eleven' :'11',
    'twelve' :'12',
    'one-thirteen' :'13',
    'two-fourteen' :'14',
    'three-fifteen' :'15',
    'four-sixteen' :'16',
    'five-seventeen' :'17',
    'six-eighteen' :'18',
    'seven-nineteen':'19',
    'eight-twenty':'20',
    'nine-twenty one':'21',
    'ten-twenty two':'22',
    'eleven-twenty three':'23',
    'twenty four':'24',
    'twenty five':'25',
    'twenty six':'26',
    'twenty seven':'27',
    'twenty eight':'28',
    'twenty nine':'29',
    'thirty':'30',
    'thirty one':'31',
    'thirty two':'32',
    'thirty three':'33',
    'thirty four':'34',
    'thirty five':'35',
    'thirty six':'36',
    'thirty seven':'37',
    'thirty eight':'38',
    'thirty nine':'39',
    'fourty':'40',
    'fourty one':'41',
    'fourty two':'42',
    'fourty three':'43',
    'fourty four':'44',
    'fourty five':'45',
    'fourty six':'46',
    'fourty seven':'47',
    'fourty eight':'48',
    'fourty nine':'49',
    'fifty':'50',
    'fifty one':'51',
    'fifty two':'52',
    'fifty three':'53',
    'fifty four':'54',
    'fifty five':'55',
    'fifty six':'56',
    'fifty seven':'57',
    'fifty eight':'58',
    'fifty nine':'59'
}


function Timeword(data){
    const hour = data.slice(0,2)
    const minute = data.slice(3)
    
    let a=[];
    let m=[];
    if (data == "00:00") return "midnight";
    if (data == "12:00") return "noon";


    for (let [key, value] of Object.entries(obj)) {
        if (hour === value && hour == 00){
            a.push("twelve");
            a.push('am');
        }

        else if(hour === value && hour >= 1 && hour < 10)
        {
            let b = key;
            let c = b.slice(3) 
            a.push(c);
            a.push('am')
        }
        else if(hour === value && hour >= 10 && hour < 12){
            let b = key;
            a.push(b);
            a.push('am')
        }

        else if(hour === value && hour >= 12){
            let b = key;
            let c = b.split('-')
            a.push(c[0]);
            a.push('pm')
        }

        if(minute === value && minute == 00){
            m.push("o'clock")
        }        
        else if(minute === value){
            let b = key;
            let c = b.split("-")            
            m.push(c[c.length-1])
        }        
    }
     (a.push(m[0]))
    return a[0].concat(" ", a[2]," ",a[1])    
}

  // another way of doing:

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function convert(data) {

    const hour = parseInt(data.slice(0,2));
    const minute = parseInt(data.slice(3));
    let a=[];  let m=[];

    if (hour == 0 && minute == 0) {
        a.push("midnight");
        return a;
    }
    if (hour == 12 && minute == 0) {
        a.push("noon");
        return a;
    }

    else {
        if (hour == 0) {
            a.push("twelve"); 
            a.push('am');
        }
        if (hour > 0 && hour < 10){
            a.push(ones[hour]);
            a.push('am');
        }
        if (hour >= 10 && hour < 12){
            a.push(teens[hour - 10]);
            a.push('am');
        }
        if (hour ==  12){
            a.push(teens[hour - 10]);
            a.push('pm');
        }
        if (hour >= 13 && hour < 22){
            a.push(ones[hour - 12]);
            a.push('pm');
        }
        if (hour >= 22 && hour < 24){
            a.push(teens[Math.floor((hour-22))])
            a.push('pm');
        }
        if (minute == 0){
            m.push("o'clock");
            a.push(m[0]);
        }
        if (minute > 0 && minute < 10){
            m.push("oh" + " " + ones[minute]);
            a.push(m[0]);

        }
        if (minute >= 10 && minute < 20){
            m.push(teens[minute - 10]);
            a.push(m[0]);
        }
        if (minute >= 20 && minute < 60){
            m.push(tens[Math.floor(minute/10)] + " " + ones[minute%10]);
            a.push(m[0]);
        }
        
        return a[0].concat(" ", a[2]," ",a[1])
}}

//end of conversion code
//testing code begins here

function Timeword1() {
  var cases = ['00:00', '12:00', '01:00', '00:12',  '06:01', '06:10', '06:18', '06:30', '10:34',  '12:09', '19:30', '21:50', '22:59', '23:23']
  for (var i = 0; i < cases.length; i++) {
    console.log(cases[i] + ": " + convert(cases[i]));    
    console.log(cases[i] + ": " + Timeword(cases[i]));
    console.log("###################################################################")
  }
}

Timeword1();