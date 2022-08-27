let map = new Map();   
function mapWithKeys(){
    map.set("January" , 0);
    map.set("February" , 0);
    map.set("March" , 0);
    map.set("April" , 0);
    map.set("May" , 0);
    map.set("June" , 0);
    map.set("July" , 0);
    map.set("August" , 0);
    map.set("September" , 0);
    map.set("October" , 0);
    map.set("November" , 0);
    map.set("December" , 0);
}


function SameBirthMonth(){
    mapWithKeys();
    for(let i = 1; i <= 50; i++ ){
        let birthMonth = Math.floor(Math.random()*12+1);
        switch(birthMonth){
            case 1:
                map.set("January" , map.get("January")+1);
                break;
            case 2:
                map.set("February" , map.get("February")+1);
                break;
            case 3:
                map.set("March" , map.get("March")+1);
                break;
            case 4:
                map.set("April" , map.get("April")+1);
                break;
            case 5:
                map.set("May" , map.get("May")+1);
                break;
            case 6:
                map.set("June" , map.get("June")+1);
                break;
            case 7:
                map.set("July" , map.get("July")+1);
                break;
            case 8:
                map.set("August" , map.get("August")+1);
                break;
            case 9:
                map.set("September" , map.get("September")+1);
                break;
            case 10:
                map.set("October" , map.get("October")+1);
                break;
            case 11:
                map.set("November" , map.get("November")+1);
                break;
            default:
                map.set("December" , map.get("December")+1);
        }
    }
}


function printMap(){
    SameBirthMonth();
    map.forEach((value , key) => {
        console.log(key + " : " + value);
    });
}

printMap();  