let a ='Red';
let b = 'Yellow';
let c = 'Green';

let light = prompt('Enter the color of traffic lights', 'Red')
    switch(light){
        case a:
            alert('Next color - ' + b);
            break

        case b:
            alert('Next color - ' + c);
            break

        case c:
            alert('Next color - ' + a); 
            default:
    }