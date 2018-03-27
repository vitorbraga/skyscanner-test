const MAX_ITEMS = 20;

const findById = (id, array) => {
  return array.find(item => item.Id === id);
}

const convertTime = (minutes) => {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}`;
}

module.exports = {
  MAX_ITEMS,
  findById,
  convertTime
}
