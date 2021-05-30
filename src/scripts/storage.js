export class Storage {
    get() {
        return JSON.parse(localStorage.getItem('task-storage') || '[]');
    }

    add(tasks) {
        localStorage.setItem('task-storage', JSON.stringify(tasks));
    }
}