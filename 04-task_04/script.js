console.log('test')
function setTimer()

{const element1 =new Date().toLocaleTimeString();
document.getElementById("container1").innerHTML = element1;

//const element2 = React.createElement('div',null,
//React.createElement('h1', null, 'React'),
//React.createElement('div', null, 
//React.craeteElement('input', {type:'text'})
//),

//React.createElemente(
//    'p' , null, new Date().toLocaleTimeString())
//);

//ReactDOM.render(element2,document.getElementById("container2"));
}
setInterval(setTimer,1000)
