const changeTheme = document.getElementById('changeTheme');
const bgTop = document.getElementById('bg-top');
const body = document.body;
const taskCont = document.getElementById('taskCont');
const taskConn = document.getElementById('taskConn');
const checkBtn = document.getElementById('checkBtn');
const mobFunc =  document.getElementById('mob-func');
const foot = document.getElementById('foot');

changeTheme.addEventListener('click', () => {
    if(changeTheme.src.split('/images/')[1] == 'icon-sun.svg'){
        changeTheme.src = '/images/icon-moon.svg'
        bgTop.classList.add('bg-top-l')
        body.classList.add('body-l')
        taskCont.classList.add('taskInp-l')
        taskConn.classList.add('taskInp-l')
        checkBtn.classList.add('taskInp-l')
        foot.classList.add('foot-l');
        mobFunc.classList.add('mob-func-l')
    }else{
        changeTheme.src = '/images/icon-sun.svg'
        bgTop.classList.remove('bg-top-l')
        body.classList.remove('body-l')
        taskCont.classList.remove('taskInp-l')
        taskConn.classList.remove('taskInp-l')
        checkBtn.classList.remove('taskInp-l')
        mobFunc.classList.remove('mob-func-l')
    }
})