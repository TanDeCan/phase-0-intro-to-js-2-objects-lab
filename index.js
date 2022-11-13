const employee = {
    name: "Mitchell",
    streetAddress: "3145 Highway 57, Trolley, ND 49285"
}
function updateEmployeeWithKeyAndValue(object, key, value) {
    const something = {...object}
    something[key] = value;
    return something
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object
}
function deleteFromEmployeeByKey(object, _name) {
    const newObj = {...object}
    delete newObj.name;
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(object, _name) {
    delete object.name;
    return object
}