import { a2 as defineStore } from "./index.cf036711.js";
import { y as ye } from "./index.2c9b47bb.js";
const useOrderStore = defineStore("order", {
  state: () => ({
    orders: []
  }),
  actions: {
    mock() {
      this.orders = [];
      for (let index = 0; index < ye.random.numeric(2); index++) {
        const amount = ye.random.numeric(2);
        const price = amount * 12;
        this.orders.push({
          id: index,
          user: {
            name: ye.name.fullName(),
            email: ye.internet.email(),
            phone: ye.phone.number()
          },
          userId: 1,
          plan: "B\xE1sico " + amount + " Leads",
          description: ye.lorem.paragraph(),
          origin: ye.internet.email(),
          locale: "Porto Alegre - RS",
          channel: "Facebook",
          operator: "Qualquer Operadora",
          qtdVidas: "2 a 4 vidas",
          personType: "Pessoa Fis\xEDca",
          amount,
          price,
          crm: ye.datatype.float(0, 100),
          paymentMethod: ye.helpers.arrayElement(["creditCard", "pix", "ticket"]),
          status: ye.helpers.arrayElement(["pending", "complete"]),
          orderDate: new Date(ye.date.between("2022-01-01", Date.now())).toLocaleString()
        });
      }
      return this.orders;
    }
  }
});
export { useOrderStore as u };
