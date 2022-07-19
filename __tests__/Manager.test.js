const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a Manager object with name string, id number, email string, and office number number", () => {
      const obj = new Manager("John Doe", 1, "example@example.com", 12345);

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
      expect(obj.officeNumber).toEqual(12345)
    });
  });

  describe("Accessors", () => {
    it("should access Manager attributes correctly", () => {
      const obj = new Manager("John Doe", 1, "example@example.com", 12345);

      expect(obj.getName()).toBe(obj.name);
      expect(obj.getId()).toBe(obj.id);
      expect(obj.getEmail()).toBe(obj.email);
      expect(obj.getOfficeNumber()).toBe(obj.officeNumber);
      expect(obj.getRole()).toEqual("Manager");
    });
  });
})