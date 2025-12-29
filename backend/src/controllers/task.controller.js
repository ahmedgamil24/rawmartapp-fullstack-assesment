import prisma from '../config/prisma.js';

// Get all tasks for logged-in user
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Create a new task
export const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId: req.user.userId
      }
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Update a task (only owner)
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const task = await prisma.task.updateMany({
      where: { id: parseInt(id), userId: req.user.userId },
      data: { title, description, status }
    });

    if (task.count === 0) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }

    res.json({ message: 'Task updated successfully' });
  } catch (error) {
    next(error);
  }
};

// Delete a task (only owner)
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.deleteMany({
      where: { id: parseInt(id), userId: req.user.userId }
    });

    if (task.count === 0) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};
