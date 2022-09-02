module.exports = (server) => {

    const taskController = require('../controllers/taskController');

    server.route('/tasks')
        .get(taskController.listAllTasks)
        .post(taskController.createATask);

    server.route('/tasks/:task_id') // req.params.task_id
        .get(taskController.getATask)
        .put(taskController.updateATask)
        .delete(taskController.deleteATask);
}