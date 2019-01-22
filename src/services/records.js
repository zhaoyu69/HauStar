import idbStore from "@/services/db";
import moment from 'moment';
const store = 'records';
const Records = [{
  active: false,
}, {
  active: false,
}, {
  active: false,
}];

export default class recordsService {
  static async getRecords() {
    const id = moment().startOf('day').unix();
    const result = idbStore.getById(store, id).data;
    if(!result) {
      this.addRecords(Records);
    }
    return result || Records;
  }

  static async addRecords(data) {
    const id = moment().startOf('day').unix();
    return idbStore.add(store, {id, data});
  }
}
