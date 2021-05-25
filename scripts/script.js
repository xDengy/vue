new Vue({
    el: '#app',
    data: {
        taskIndex: '1',
        deletePageDisplay: 'none',
        newTaskDisplay: 'none',
        helpDisplay: 'none',
        line: 'none',
        tasks: [
            {
                taskName: 'Meet Lorence',
                taskDesc: 'ddddd wwwww cccc sit amet, consectetur adipisicing elit. Beatae, enim!',
                taskDay: '30th',
                taskMonth: 'March',
                taskYear: '',
                taskNotifs: '',
                taskColor: 'green',
                taskTime: '12 pm',
                taskDone: false,
            },
            {
                taskName: 'Meet Lorence 2',
                taskDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, modi!',
                taskDay: '22th',
                taskMonth: 'Feb',
                taskYear: '',
                taskNotifs: '',
                taskColor: 'red',
                taskTime: '13 pm',
                taskDone: true,
            },
            {
                taskName: 'Meet Lorence',
                taskDesc: 'consectetur adipisicing elit. Beatae, enim!',
                taskDay: '10th',
                taskMonth: 'Aug',
                taskYear: '',
                taskNotifs: '',
                taskColor: 'blue',
                taskTime: '10 apm',
                taskDone: false,
            },
        ],
    },
    methods: {
        lineThrough() {
            if (this.tasks[this.taskIndex].taskDone === true) {
                this.line = 'line-through';
            } else {
                this.line = 'none';
            }
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