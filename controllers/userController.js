const { User } = require('../models');

exports.createUser = async (req, res) => {
    try {
        const { nome, cognome, email, password } = req.body;
        const user = await User.create({nome, cognome, email, password});
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) { return res.status(404).json({ error: 'Post not found' })}
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: err.message});
    }
}

exports.updateUser = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { nome, cognome, email, password } = req.body;
        const user = await User.findByPk(id);
        if (!user) { return res.status(404).json({ error: 'Post not found' })}
        user.nome = nome;
        user.cognome = cognome;
        user.email = email;
        user.password = password;
        await user.save();
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.destroy({ where: { id } });
        if (!user) { return res.status(404).json({ error: 'Post not found' })}
        return res.status(200).json({ message: 'Operation successfully' });
    }
    catch (err) {
        return res.status(500).json({ error: err.message});
    }
};