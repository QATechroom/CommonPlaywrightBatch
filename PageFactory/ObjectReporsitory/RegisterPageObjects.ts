export class RegisterPageObjects {
    firstName = 'input[name="customer.firstName"]';
    lastName = 'input[name="customer.lastName"]';
    address = 'input[name="customer.address.street"]';
    city = 'input[name="customer.address.city"]';
    state = 'input[name="customer.address.state"]';
    zipCode = 'input[name="customer.address.zipCode"]';
    phone = 'input[name="customer.phoneNumber"]';
    ssn = 'input[name="customer.ssn"]';
    username = 'input[name="customer.username"]';
    password = 'input[name="customer.password"]';
    confirmPassword = `//input[@id='repeatedPassword']`;
    registerButton = 'input[value="Register"]';
    ErrorMessage = `//span[@id='customer.firstName.errors']`;
}