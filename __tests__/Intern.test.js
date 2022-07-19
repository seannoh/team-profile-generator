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