import {Storage} from "./storage";

new Vue({
    el: '#app',
    data: {
        storage: new Storage(),
        deletePageDisplay: 'none',
        newTaskDisplay: 'none',
        helpDisplay: 'none',
        line: 'none',
        taskName: '',
        taskDesc: '',
        taskDay: '',
        taskMonth: '',
        taskYear: '',
        taskNotifs: '',
        taskColor: '#000000',
        taskDone: false,
        tasks: [],
    },
    created() {
        this.tasks = this.storage.get();
    },
    methods: {
        addNewTask() {
            this.tasks.push({
                taskName: this.taskName,
                taskDesc: this.taskDesc,
                taskDay: this.taskDay + 'th',
                taskMonth: this.taskMonth,
                taskYear: this.taskYear,
                taskNotifs: this.taskNotifs,
                taskColor: this.taskColor,
                taskTime: this.writeCurrentTime(),
                taskDone: false,
            });
            localStorage.setItem('task-storage', JSON.stringify(this.tasks));
            this.newTaskDisplay = 'none';
        },
        deleteTask(index) {
            if (this.tasks.taskDone === true) {
                this.tasks.splice(index, 1);
                this.storage.add(this.tasks);
                this.deletePageDisplay = 'none';
            } else {
                alert('This task isn`t done');
            }
        },
        showDeletePageDisplay(index) {
            this.taskIndex = index;
            this.deletePageDisplay = 'flex';
            this.tasks.taskDone = this.tasks[index].taskDone;
            this.tasks.taskColor = this.tasks[index].taskColor;
            localStorage.setItem('task-storage', JSON.stringify(this.tasks));
            this.fillTaskInfo(index);
            this.lineThrough();
        },
        fillTaskInfo(index) {
            this.tasks.taskName = this.tasks[index].taskName;
            this.tasks.taskTime = this.tasks[index].taskTime;
            this.tasks.taskDate = this.tasks[index].taskDay + ' ' + this.tasks[index].taskMonth;
            this.tasks.taskDesc = this.tasks[index].taskDesc;
        },
        completeTask(index) {
            this.tasks[index].taskDone = true;
            this.tasks.taskDone = this.tasks[index].taskDone;
            localStorage.setItem('task-storage', JSON.stringify(this.tasks));
            this.lineThrough();
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
        writeCurrentTime() {
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
        hideDeletePageDisplay() {
            this.deletePageDisplay = 'none';
        },
        showNewTaskDisplay() {
            this.newTaskDisplay = 'flex';
        },
        hideNewTaskDisplay() {
            this.newTaskDisplay = 'none';
        },
        showHelpDisplay() {
            this.helpDisplay = 'flex';
        },
        closeHelpDisplay() {
            this.helpDisplay = 'none';
        },
    }
});