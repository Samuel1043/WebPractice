#snippet code
imrc
imr

# to know

use <React.Fragment> to avoid from mutiple element return error
using bootstrap (npm i bootstrap@4.1.1)

## event handler

props and state

## tips

直接傳一整個 state 中同一類變數，以免要繼續命名變數 ex:counters.jsx 裡 state={counters}， 一起傳 counters 下面的 value,id 變數到另一個 jsx

this.props.id , this.props.value  
const {id,value}=this.props;
dont need to type this.props evertime

for Stateless Functional Component
you can use arrow function(navbar.jsx)
