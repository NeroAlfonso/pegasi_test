module.exports ={
    onlyNumbers :new RegExp(/^[0-9]*$/),
    validExternalSources: new RegExp(/((\bST\b)|(\bHBV\b))/),
    yyymmddhhssformat: new RegExp(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/)
};