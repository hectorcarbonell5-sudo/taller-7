import usersModel from "../models/users.js";
const usersController = {
    create: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({
                    message: "Email y password son obligatorios"
                });
            }
            const newUser = new usersModel({
                name,
                email,
                password,
               
            });
            const existingUser = await usersModel.findOne({ email });

            if (existingUser) {
                return res.status(400).json({
                    message: "El email ya está registrado"
                });
            }
            await newUser.save();
            res.status(201).json({ message: "Usuario creado correctamente." });
        } catch (error) {
            res.status(500).json({ error: "Error al crear el usuario. Error= " + error })
        }
    },
    readAll: async (req, res) => {
     try {
            const allUsers = await usersModel.find();
            res.status(201).json({ data: allUsers })
        }
        catch (error) {
            res.status(500).json({ error: 'Error al leer los datos de los usuarios.' });
        }  
    },
    read: async (req, res) => {
        try {
            const { id } = req.params;
           
            const userFound = await usersModel.findById(id).select("-password");
            if (userFound) {
                res.status(201).json({ data: userFound });
            } else {
                res.status(404).json({ message: "Usuario no encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al leer el usuario. Error. " + error })
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;

            let { name, email, password } = req.body;
            
        
            const userUpdated = await usersModel.findByIdAndUpdate(id, {
                name,
                email,
                password,
               
            },
                { new: true } //Devuelve el actualizado
            );
            if (userUpdated) {
                res.status(201).json({ message: "Usuario actualizado correctamente." });
            } else {
                res.status(404).json({ message: "Usuario no encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el usuario. Error. " + error })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const userDeleted = await usersModel.findByIdAndDelete(id);
            if (userDeleted) {
                res.status(201).json({ message: "Usuario eliminado correctamente." });
            } else {
                res.status(404).json({ message: "Usuario no encontrado." });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el usuario. Error. " + error })
        }
    },
};

export default usersController;
