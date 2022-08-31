const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sequelize_sample', 'root', 'root', {
    host: 'localhost',
    dialect:  'mysql'
  });

sequelize.authenticate()
  .then(() => {
    console.log("Conectado com sucesso")
  })
  .catch((err) => {
    console.log("Erro ao conectar com banco de dados. Causa: "+err)
  })





























  // const Professor = sequelize.define('Professor', {
  //   nome: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   },
  //   email: {
  //     type: DataTypes.STRING,
  //     unique: true,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   },
  // })
  
  // const Departamento = sequelize.define('Departamento', {
  //   nome: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   },
  //   sigla: {
  //     type: DataTypes.STRING,
  //     unique: true,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   }
  // })
  
  // const Disciplina = sequelize.define('Disciplina', {
  //   nome: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   },
  //   cargaHoraria: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true
  //     }
  //   }
  // })
  
  // const Alocacao = sequelize.define('Alocacao')
  
  // Departamento.hasMany(Professor, {
  //   foreignKey: {
  //     allowNull: false
  //   }
  // })
  
  // Professor.belongsToMany(Disciplina, { through: Alocacao });
  // Disciplina.belongsToMany(Professor, { through: Alocacao });
  
  // sequelize.sync({force: true}).then(() => {
  //   // const departamento = Departamento.create({nome: 'Exatas', sigla: 'CCEN'})
  //   // const professor = Professor.create({nome: 'Rafael Duarte', email: 'r@gmail.com'})
  //   // const disciplina = Disciplina.create({nome: 'Backend em NodeJS'})
    
  // }).catch((err) => {console.log("Erro: "+err)});
  
  // //const allocacao = Allocacao.create({ProfessorId: 1, DisciplinaId: 1 })
  
  

