function createEmployee(name, role, salary) {
    return {
        name,
        role,
        salary,
        introduce() {
            console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);
        }
    };
}
