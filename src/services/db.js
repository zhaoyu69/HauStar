import { openDb } from "idb";

const dbPromise = openDb('store', 1, upgradeDB => {
  switch (upgradeDB.oldVersion) {
    case 0:
      upgradeDB.createObjectStore('keyval');
      upgradeDB.createObjectStore('records', {keyPath: 'id'});
  }
});

const idbStore = {
  async get(key) {
    const db = await dbPromise;
    return db.transaction('keyval').objectStore('keyval').get(key);
  },
  async set(key, val) {
    const db = await dbPromise;
    const tx = db.transaction('keyval', 'readwrite');
    tx.objectStore('keyval').put(val, key);
    return tx.complete;
  },
  async delete(key) {
    const db = await dbPromise;
    const tx = db.transaction('keyval', 'readwrite');
    tx.objectStore('keyval').delete(key);
    return tx.complete;
  },
  async clear() {
    const db = await dbPromise;
    const tx = db.transaction('keyval', 'readwrite');
    tx.objectStore('keyval').clear();
    return tx.complete;
  },
  async keys() {
    const db = await dbPromise;
    return db.transaction('keyval').objectStore('keyval').getAllKeys(key);
  },

  async add(store, obj) {
    const db = await dbPromise;
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(obj);
    return tx.complete;
  },
  async getAll(store) {
    const db = await dbPromise;
    return db.transaction(store).objectStore(store).getAll();
  },
  async getById(store, id) {
    const db = await dbPromise;
    return db.transaction(store).objectStore(store).get(id);
  }
};

export default idbStore;
