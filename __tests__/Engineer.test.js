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