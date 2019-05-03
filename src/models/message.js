const message = (sequelize, DataTypes) => {
  const Message = sequelize.define("message", {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true
    },
    text: DataTypes.STRING
  });

  Message.associate = (models) => {
    Message.belongsTo(models.User);
  };

  return Message;
};

export default message;
