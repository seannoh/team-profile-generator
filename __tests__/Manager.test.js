const Manager = require("../lib/Manager");

describe("Manager", () => {
  // Testing initializtion of Manager objects
  describe("Initialization", () => {
    // Positive test
    it("should create a Manager object with name string, id number, email string, and office number number", () => {
      const obj = new Manager("John Doe", 1, "example@example.com", 12345);

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
      expect(obj.officeNumber).toEqual(12345)
    });

    // Exception tests
    it("should throw an error if name is not a non-empty string", () => {
      const cb = () => new Manager(123, 1, "example@example.com", 12345);
      const err = new Error("Expected 'name' to be a non-empty string");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if id is not a non-negative number", () => {
      const cb = () => new Manager("John Doe", "1", "example@example.com", 12345);
      const err = new Error("Expected 'id' to be a non-negative number");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the email is not a non-empty string", () => {
      const cb = () => new Manager("John Doe", 1, 123, 12345);
      const err = new Error("Expected 'email' to be a non-empty string");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if the email is not valid", () => {
      const cb = () => new Manager("John Doe", 1, "foobar", 12345);
      const err = new Error("Expected 'email' to be a valid email address");
      expect(cb).toThrowError(err);
    });
    it("should throw an error if officeNumber is not a non-negative number", () => {
      const cb = () => new Manager("John Doe", 1, "example@example.com", "12345");
      const err = new Error("Expected 'officeNumber' to be a non-negative number");
      expect(cb).toThrowError(err);
    });
  });

  // Testing accessor methods 
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