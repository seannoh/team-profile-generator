const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an Employee object with name string, id number and email string", () => {
      const obj = new Employee("John Doe", 1, "example@example.com");

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
    });
  });

  describe("Accessors", () => {
    it("should access Employee attributes correctly", () => {
      const obj = new Employee("John Doe", 1, "example@example.com");

      expect(obj.getName()).toBe(obj.name);
      expect(obj.getId()).toBe(obj.id);
      expect(obj.getEmail()).toBe(obj.email);
      expect(obj.getRole()).toEqual("Employee");
    });
  });
})