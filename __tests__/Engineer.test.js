const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create a Engineer object with name string, id number, email string, and github username string", () => {
      const obj = new Engineer("John Doe", 1, "example@example.com", "johndoe");

      expect(obj.name).toEqual("John Doe");
      expect(obj.id).toEqual(1);
      expect(obj.email).toEqual("example@example.com");
      expect(obj.github).toEqual("johndoe")
    });

    it("should throw an error if name is not a non-empty string", () => {
      const cb = () => new Engineer(123, 1, "example@example.com", "johndoe");
      const err = new Error("Expected 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if id is not a non-negative number", () => {
      const cb = () => new Engineer("John Doe", "1", "example@example.com", "johndoe");
      const err = new Error("Expected 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the email is not a non-empty string", () => {
      const cb = () => new Engineer("John Doe", 1, 123, "johndoe");
      const err = new Error("Expected 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if the email is not valid", () => {
      const cb = () => new Engineer("John Doe", 1, "foobar", "johndoe");
      const err = new Error("Expected 'email' to be a valid email address");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if github is not a non-empty string", () => {
      const cb = () => new Engineer("John Doe", 1, "example@example.com", 12345);
      const err = new Error("Expected 'github' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

  });

  describe("Accessors", () => {
    it("should access Engineer attributes correctly", () => {
      const obj = new Engineer("John Doe", 1, "example@example.com", "johndoe");

      expect(obj.getName()).toBe(obj.name);
      expect(obj.getId()).toBe(obj.id);
      expect(obj.getEmail()).toBe(obj.email);
      expect(obj.getGithub()).toBe(obj.github);
      expect(obj.getRole()).toEqual("Engineer");
    });
  });
})