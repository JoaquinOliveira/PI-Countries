const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

/* País con las siguientes propiedades:
ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital *
Subregión
Área
Población */
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {  
        id: {
          type: DataTypes.STRING(3),
          primaryKey: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        flag: {
          type: DataTypes.STRING,
          allowNull: false
        },
        continent: {
          type: DataTypes.STRING,
          allowNull: false
        },
        capital:{
          type: DataTypes.STRING,
 
        },
        subregion: {
          type: DataTypes.STRING,
        },
        area: {
          type: DataTypes.FLOAT,
        },
        population: {
          type: DataTypes.INTEGER,
        },}, {timestamps:false}) //para sacar el createdAt y updateAt de la tabla.)
}



