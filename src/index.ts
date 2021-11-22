import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap/CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("root");

customMap.addMarker(user);
customMap.addMarker(company);
