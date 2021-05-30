import {Storage} from "./storage";

new Vue({
    el: '#app',
    data: {
        storage: new Storage(),
        deletePageDisplay: 'none',
        newTaskDisplay: 'none',
        helpDisplay: 'none',
        line: 'none',
        tasks: [
            taskName = '',
            taskDesc = '',
            taskDay = '',
            taskMonth = '',
            taskYear = '',
            taskNotifs = '',
            taskColor = '',
            taskTime = '',
            taskDone = '',
        ],
    },
    methods: {
        clearArray() {
            this.tasks.taskName = '';
            this.tasks.taskDesc = '';
            this.tasks.taskDay = '';
            this.tasks.taskMonth = '';
            this.tasks.taskYear = '';
            this.tasks.taskNotifs = '';
            this.tasks.taskColor = '';
        },
        addNewTask() {
            this.tasks.push({
                taskName: this.tasks.taskName,
                taskDesc: this.tasks.taskDesc,
                taskDay: this.tasks.taskDay + 'th',
                taskMonth: this.tasks.taskMonth,
                taskYear: this.tasks.taskYear,
                taskNotifs: this.tasks.taskNotifs,
                taskColor: this.tasks.taskColor,
                taskTime: this.currentTime(),
                taskDone: 'false',
            });

            this.clearArray();
            localStorage.setItem('task-storage', JSON.stringify(this.tasks));
            this.newTaskDisplay = 'none';
        },
        lineThrough() {
            if (this.tasks[this.taskIndex].taskDone === true) {
                this.line = 'line-through';
            } else {
                this.line = 'none';
            }
        },
        writeStrHours(count = 0, am, pm) {
            if (count >= 0 && count < 12) {
                return am;
            }
            return pm;
        },
        currentTime() {
            let date = new Date(),
                hour = date.getHours();
            let strHour = this.writeStrHours(hour, 'am', 'pm')
            if (hour === 0) {
                hour = 12;
            }
            if (hour > 12) {
                hour = hour - 12;
            }
            return hour + ' ' + strHour;
        },
        showDeletePageDisplay(index) {
            this.taskIndex = index;
            this.deletePageDisplay = 'flex';
            this.lineThrough();
        },
        hideDeletePageDisplay() {
            this.deletePageDisplay = 'none';
        },
        showNewTaskDisplay() {
            this.newTaskDisplay = 'flex';
        },
        hideNewTaskDisplay() {
            this.newTaskDisplay = 'none';
        },
        completeTask(index) {
            this.tasks[index].taskDone = true;
            this.lineThrough();
        },
        showHelpDisplay() {
            this.helpDisplay = 'flex';
        },
        closeHelpDisplay() {
            this.helpDisplay = 'none';
        }
    }
});