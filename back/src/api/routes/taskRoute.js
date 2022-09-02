module.exports = (server) => {

    const taskController = require('../controllers/taskController');

    server.route('/tasks')
        .get(taskController.listAllTasks)
        .post(taskController.createATask)
        .delete(taskController.deleteAllTasks);

    server.route('/tasks/:task_id') // req.params.task_id
        .get(taskController.getATask)
        
        .put(taskController.updateATask)
        .delete(taskController.deleteATask);

    server.route('/tasks/etat/:task_etat') // req.params.task_etat
        .get(taskController.getTaskByEtat)
}