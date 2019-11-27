const axios = require("axios");
describe("node接口", () => {
  test("test接口测试", () => {
    return axios
      .get("http://localhost:8081/api/test")
      .then((response: { data: { xx: string } }) => {
        expect(response.data.xx).toBe("yideng");
      });
  });
});
