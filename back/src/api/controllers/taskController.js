const TaskModel = require('../models/taskModel');

const textApiProvider = require('../providers/textApiProvider');

exports.listAllTasks = async (req, res) => {
        try {
          const tasks = await TaskModel.find();
          res.status(200).json({
            tasks: tasks.map((task) => ({
              _id: task.id,
              text: task.text,
             
            })),
          });
        } catch (err) {
          console.error(err.message);
          res.status(500).json({ message: "Failed to fetch data." });
        }
    };


exports.createATask = async (req, res) => {
    const text = req.body.text;
    console.log(req.body.text);
    const newTask = new TaskModel(req.body);
    
        
        

        newTask.save((error, task) => {
            if (error) {
                res.status(500);
                console.log(error);
                res.json({ message: "Erreur serveur." });
            }
            else {
                res.status(201);
                res.json(task);
            }
        });
    
}

exports.getATask = (req, res) => {
    TaskModel.findById(req.params.task_id, (error, task) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(task);
        }
    });
}

exports.updateATask = (req, res) => {
    TaskModel.findByIdAndUpdate(req.params.task_id, req.body, {new: true}, (error, task) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(task);
        }
    });
}

exports.deleteATask = (req, res) => {
    TaskModel.findByIdAndRemove(req.params.task_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Article supprimé"});
        }
    });
}
