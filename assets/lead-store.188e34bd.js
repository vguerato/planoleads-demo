import { a2 as defineStore } from "./index.cf036711.js";
import { y as ye } from "./index.2c9b47bb.js";
function getNameInitials(name) {
  const fullName = name.split(" ");
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
}
const useLeadStore = defineStore("lead", {
  state: () => ({
    leads: []
  }),
  actions: {
    mock() {
      this.leads = [];
      for (let index = 0; index < ye.random.numeric(2); index++) {
        const name = ye.name.fullName();
        this.leads.push({
          id: index,
          tag: "Plano de Saude",
          name,
          initials: getNameInitials(name),
          phone: "19991123344",
          email: "teste@test.com",
          address: "Porto Alegre - RS",
          type: "Pessoa F\xEDsica",
          price: ye.datatype.float(0, 100),
          createdAt: Date.now()
        });
      }
      return this.leads;
    }
  }
});
export { useLeadStore as u };
