import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Productos = sequelize.define('productos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  productoImg: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },  
  descripcion: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
});
export default Productos;
