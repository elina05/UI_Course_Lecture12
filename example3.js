let a = +prompt('Please enter the side length')
let b = +prompt('Please enter the side width')
let c = 2

if (a == b){
    a ** 2
    alert('The area of your square = ' + a ** 2)
    
} else if (a != b){
    c*(a + b)
    alert('The perimetr of your rectangle = ' + c*(a + b))
}