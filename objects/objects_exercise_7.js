let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // Only iterates over myObj's own properties, it will only log 'qux'


for (let key in myObj) {
  console.log(key);
} // Iterates over both myOBj's own properties and those inherited from myProtoObj, it will log 'qux', 'foo', and 'bar'