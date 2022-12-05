import { b as boot } from "./index.cf036711.js";
import { c as createI18n } from "./vue-i18n.runtime.esm-bundler.557dca74.js";
var enUS = {
  failed: "Action failed",
  success: "Action was successful",
  new: "New",
  edit: "Edit",
  remove: "Remove",
  save: "Save",
  clear: "Clear",
  my_leads: "My Leads",
  hello: "Hi",
  packages: "Packages",
  get_leads: "Get Leads",
  myAccount: "My Account",
  profile: "Profile",
  account: "Account",
  order: "Order",
  orders: "Orders",
  preferences: "Preferences",
  team: "Team",
  integrations: "Integrations",
  cancel: "Cancel",
  logout: "Logout",
  accountId: "Account ID",
  accountEmail: "Account Email",
  username: "Email",
  password: "Password",
  name: "Name",
  lastname: "Lastname",
  phone: "Phone",
  company: "Company",
  doc: "CPF/CNPJ",
  doc_person: "CPF",
  doc_company: "CNPJ",
  postalCode: "Postal Code",
  address: "Address",
  addressNumber: "Address Number",
  neighborhood: "Neighborhood",
  state: "Estado",
  city: "City",
  creditCard: "Credit Card",
  pix: "Pix",
  ticket: "Ticket",
  details: "Details",
  paymentMethod: "Payment Method",
  orderDate: "Order Date",
  status: "status",
  description: "Description",
  orderResume: "Order Resume",
  loginPage: {
    title: "Welcome",
    unregistered: "Dont have account?",
    register: "Create account",
    missingPassword: "Missing your password?",
    signIn: "Sign In",
    recoverPassword: "Recover Password",
    recoverPasswordInstructions: "Submit your PlanoLeads email account and we will send the instructions to reset your password. Sometimes the email message can be received in spam zone, please verify.",
    sendInstructions: "Send Instructions"
  },
  createAccountPage: {
    title: "Create new account",
    confirmPassword: "Confirm password",
    register: "Register",
    alreadyRegistered: "Is already registered?"
  },
  changeEmailDialog: {
    title: "Change Email",
    newEmail: "New Email",
    instructions: "You will be receive a mail requesting the change confirmation, please, click in [Confirm E-mail] to complete the operation.",
    changeEmail: "Change Email"
  },
  changePasswordDialog: {
    changePassword: "Change Password",
    currentPassword: "Current Password",
    newPassword: "New Password",
    passwordConfirmation: "Confirm Password",
    requireMinLength: "Min 8 chars",
    requireMinorMajorLetters: "A minor and major letter",
    requireNumber: "A number"
  },
  filter: "Filter",
  filters: "Filtros",
  segment: "Segment",
  apearence: "Apearence",
  color: "Color",
  active: "Active",
  label: "Label",
  preferencesPage: {
    filterAbout: "Define the pre-visualization when you search some lead",
    autopilotAbout: "With the autopilot on, you no longer need to go through the trouble of choosing your leads, our platform chooses the leads for you based on your settings.",
    autopilotActivate: "Receive leads on autopilot",
    autopilotQuantity: "How many leads do you want to receive on average per day?",
    autopilotRegion: "Region of Interest",
    apearenceAbout: "Define up to 3 shortcuts in the lead listing",
    businessMoment: "Business Moment",
    showOnDashboard: "Show on Dashboard",
    alterLabel: "Alterar R\xF3tulo"
  }
};
var ptBR = {
  failed: "Action failed",
  success: "Action was successful",
  new: "Novo",
  my_leads: "Meus Leads",
  hello: "Ol\xE1"
};
var messages = {
  "en-US": enUS,
  "pt-BR": ptBR
};
var i18n = boot(({ app }) => {
  const i18n2 = createI18n({
    locale: "en-US",
    globalInjection: true,
    messages
  });
  app.use(i18n2);
});
export { i18n as default };
