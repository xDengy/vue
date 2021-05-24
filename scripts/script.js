new Vue({
    el: '#task',
    data: {
        taskIndex: '1',
        detailsPageDisplay: 'none',
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
        showDetailsPageDisplay(index) {
            this.taskIndex = index;
            this.detailsPageDisplay = 'flex';
        },
        hideDetailsPageDisplay() {
            this.detailsPageDisplay = 'none';
        },
        completeTask(index) {
            this.tasks[index].taskDone = true;
        }
    }
});