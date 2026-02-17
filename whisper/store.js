import fs from "node:fs/promises";
import path from "node:path";

const fileName = path.join(process.cwd(), "data.json");

const saveChanges = (data) => {
  return fs.writeFile(fileName, JSON.stringify(data));
};

const getData = async () => {
  const data = await fs.readFile(fileName, "utf-8");
  return JSON.parse(data);
};

const getAll = getData;

const getById = async (id) => {
  const data = await getData();
  return data.find((item) => item.id === id);
};

const create = async (message) => {
  const data = await getData();
  const newItem = { message, id: data.length + 1 };
  await saveChanges(data.concat(newItem));
  return newItem;
};

const updateById = async (id, message) => {
  const data = await getData();
  const newData = data.map((current) => {
    if (current.id === id) {
      return { ...current, message };
    }
    return current;
  });
  await saveChanges(newData);
};

const deleteById = async (id) => {
  const data = await getData();
  await saveChanges(data.filter((current) => current.id !== id));
};

export { getAll, getById, create, updateById, deleteById };
