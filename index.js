// tuple data types
// let userId: [string, number];
// userId = ["mamun", 21];
// console.log(userId);
// enum data types  // duplicate value is not allowed here //
// enum firstRequest {
//   readData = 1,
//   writeData = 3,
//   deleteData,
// }
// console.log(firstRequest.readData);
// enum secondRequest {
//   textData = "full request",
//   deleteData = "hello function",
// }
// console.log(secondRequest.deleteData);
var thirdRequest;
(function (thirdRequest) {
    thirdRequest["firstName"] = "hello mamun";
    thirdRequest["lastName"] = "burning boy abir";
    thirdRequest[thirdRequest["id"] = 46546] = "id";
})(thirdRequest || (thirdRequest = {}));
console.log(thirdRequest.id);
