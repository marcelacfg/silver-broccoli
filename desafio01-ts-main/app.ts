import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { MagicAccount } from "./class/MagicAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(10);
console.log(peopleAccount.getBalance());
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(120);
companyAccount.getLoan(20);
companyAccount.withdraw(130);
console.log(companyAccount.getBalance());
const magicAccount: MagicAccount = new MagicAccount("Marcela", 30);
magicAccount.deposit(1233);
console.log(magicAccount.getBalance());
