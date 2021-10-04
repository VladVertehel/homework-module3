console.log('----------------------------');
console.log('Task 2');
/* Переробити наступний код
↓              ↓              ↓ 
const user = {
    name: 'Vlad',
    showName() {
        console.log(this.name);
    }
}

const admin = {
    name: 'admin',
    showName() {
        console.log(this.name);
    }
}

user.showName();
admin.showName();*/

function showName(name){
    console.log(this.name);
}

const user = {
    name: 'Vlad',
}
const admin = {
    name: 'admin',
}

user.show = showName;
admin.show = showName;

user.show();
admin.show();