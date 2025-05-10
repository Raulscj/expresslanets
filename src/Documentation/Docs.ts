//APARTADO DE SCHEMAS DEL SWAGGER
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Nombre de Admin
 *         password:
 *           type: string
 *           description: Clave del Admin
 *       required:
 *         -username
 *         -password
 *       example:
 *         username: DarkKevo
 *         password: 159753qwerty
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: Usuario del Admin
 *         password:
 *           type: string
 *           description: Clave del Admin
 *       required:
 *         -username
 *         -password
 *       example:
 *         username: DarkKevo
 *         password: 159753qwerty
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuarios:
 *       type: object
 *       properties:
 *         id:
 *          type: number
 *         firstName:
 *           type: string
 *           description: Nombre del Usuario
 *         lastName:
 *           type: string
 *           description: Apellido del Usuario
 *       required:
 *        -firstName
 *        -lastName
 *       example:
 *         firstName: Jose
 *         lastName: Perez
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Encuestas-Delete:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Id de la encuesta a eliminar
 *       required:
 *         -id
 *       example:
 *         id: 234234234j23k4jk23
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Encuestas-Edit:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Id del Objeto a Editar
 *         propietario:
 *           type: string
 *           description: Propietario
 *         nombre:
 *           type: string
 *           description: Nombre o Titulo de la Encuesta
 *         descripcion:
 *           type: string
 *           description: Descripcion de la Encuesta
 *         open:
 *           type: boolean
 *           description: Declara si esta abierto o no el form
 *         periodo:
 *           type: string
 *           description: Periodo Academico
 *       required:
 *         -nombre
 *         -id
 *         -open
 *         -periodo
 *       example:
 *         id: 234923rjf2ri
 *         propietario: j34823805h24h
 *         nombre: Opiniones Estudiantiles
 *         open: true
 *         periodo: 2023b
 */

//APARTADO DE DOCUMENTACION POR RUTA

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Crea un Nuevo Administrador
 *     tags: [Administradores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: Objet of User created
 *       406:
 *        description: User already exists
 *       500:
 *        description: Error message
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login de Administrador
 *     tags: [Administradores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: To get the token, this token expires in 3 minutes
 *       400:
 *        description: Invalid user or password
 */

/**
 * @swagger
 * /auth/info:
 *   get:
 *     summary: Information of the Admin
 *     tags: [Administradores]
 *     requestBody:
 *       required: false
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Payload of the admin
 *       401:
 *        description: Token is invalid
 */

/**
 * @swagger
 * /v0/users:
 *   post:
 *     summary: Crear Usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuarios'
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success New User!
 *       400:
 *        description: It is necessary to indicate the parameters 'firstName' and 'lastName' for the creation of a user
 *       500:
 *        description: Error message
 */

/**
 * @swagger
 * /v0/users:
 *   get:
 *     summary: Obtener Usuarios
 *     tags: [Usuarios]
 *     parameters:
 *      - in: query
 *        name: from
 *        schema:
 *         type: integer
 *        required: false
 *        description: Índice inicial de los usuarios
 *      - in: query
 *        name: take
 *        schema:
 *          type: integer
 *        required: false
 *        description: Cantidad de usuarios a tomar
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: JSON of Users!
 *       500:
 *        description: Error message
 */
