import {Login} from '../e2e/pages/Login';
import {HomePage, HomePage}  from '../pages/homePage';

const Login =new Login();
const HomePage = new HomePage();

describe ("Testing the login page", () => {
    it("Test1: ")
        Login.visit();
        Login.login("user888@gmail.com", "1234567890");
        HomePage.logout();
})
describe ("Testing the login page", () => {
    it("Test2: ")
        Login.visit();
        Login.login("testowyqa@qa.team", "QA!automation-1");
        HomePage.logout();
})