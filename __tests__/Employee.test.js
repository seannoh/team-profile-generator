const Employee = require("../lib/Employee");

describe("Employee", () => {
  // Testing initialization of Employee objects
  describe("Initialization", () => {
    // Positive test
    it("should create an Employee object with name string, id number and email string", () => {
      const obj = new Employee("John Doe", 1, "example@example.com");

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
    });

    // Exception tests
    it("should throw an error if name is not a non-empty string", () => {
      const cb = () => new Employee(123, 1, "example@example.com");
      const err = new Error("Expected 'name' to be a non-empty string");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if id is not a non-negative number", () => {
      const cb = () => new Employee("John Doe", "1", "example@example.com");
      const err = new Error("Expected 'id' to be a non-negative number");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the email is not a non-empty string", () => {
      const cb = () => new Employee("John Doe", 1, 123);
      const err = new Error("Expected 'email' to be a non-empty string");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the email is not valid", () => {
      const cb = () => new Employee("John Doe", 1, "foobar");
      const err = new Error("Expected 'email' to be a valid email address");
      expect(cb).toThrowError(err);
    });
  });

  // Testing accessor methods
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