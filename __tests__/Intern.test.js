const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create a Intern object with name string, id number, email string, and school string", () => {
      const obj = new Intern("John Doe", 1, "example@example.com", "UC Berkeley");

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
      expect(obj.school).toEqual("UC Berkeley")
    });

    it("should throw an error if name is not a non-empty string", () => {
      const cb = () => new Intern(123, 1, "example@example.com", "UC Berkeley");
      const err = new Error("Expected 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if id is not a non-negative number", () => {
      const cb = () => new Intern("John Doe", "1", "example@example.com", "UC Berkeley");
      const err = new Error("Expected 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the email is not a non-empty string", () => {
      const cb = () => new Intern("John Doe", 1, 123, "UC Berkeley");
      const err = new Error("Expected 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the email is not valid", () => {
      const cb = () => new Intern("John Doe", 1, "foobar", "UC Berkeley");
      const err = new Error("Expected 'email' to be a valid email address");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if school is not a non-empty string", () => {
      const cb = () => new Intern("John Doe", 1, "example@example.com", 12345);
      const err = new Error("Expected 'school' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

  });

  describe("Accessors", () => {
    it("should access Intern attributes correctly", () => {
      const obj = new Intern("John Doe", 1, "example@example.com", "UC Berkeley");

      expect(obj.getName()).toBe(obj.name);
      expect(obj.getId()).toBe(obj.id);
      expect(obj.getEmail()).toBe(obj.email);
      expect(obj.getSchool()).toBe(obj.school);
      expect(obj.getRole()).toEqual("Intern");
    });
  });
})