import usersModel from "../models/users.js";

const loginController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // 1. Buscar usuario (incluyendo password)
            const user = await usersModel.findOne({ email }).select("+password");

            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado" });
            }

            // 2. Comparar contraseña
            const isMatch = await password ===user.password;

            if (!isMatch) {
                return res.status(401).json({ message: "Credenciales incorrectas" });
            }

        

            // 4. Respuesta con token y datos del usuario (sin password)
            res.json({
                message: "Login exitoso",
               
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    
                }
            });

        } catch (error) {
            res.status(500).json({ error: "Error en login: " + error });
        }
    }
};

export default loginController;
