const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name string, id number and email string", () => {
      const obj = new Employee("John Doe", 1, "example@example.com");

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
    });
  });
})