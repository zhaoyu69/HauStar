import idbStore from "@/services/db";
import sun from "@/assets/sun.png";
import sun_ from "@/assets/sun_.png";
import study from "@/assets/study.png";
import study_ from "@/assets/study_.png";
import moon from "@/assets/moon.png";
import moon_ from "@/assets/moon_.png";
const types = [{
  id: 0,
  src: sun,
  activeSrc: sun_,
  label: "早起",
}, {
  id: 1,
  src: study,
  activeSrc: study_,
  label: "学习",
}, {
  id: 2,
  src: moon,
  activeSrc: moon_,
  label: "早睡",
}];

export default class typesService {
  static async getTypes() {
    const Types = await idbStore.get("types");
    if(!Types) {
      this.setTypes(types);
    }
    return Types || types;
  }

  static async setTypes(types) {
    return idbStore.set("types", types);
  }
}
