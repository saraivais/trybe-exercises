const book = (sequelize, DataTypes) => {
  const book = sequelize.define("book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    underscored: true,
    tableName: 'books',
  });

  return book;
};

module.exports = book;