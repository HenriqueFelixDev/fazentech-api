const maskCPF = cpf => 
    cpf.replace(RegExp('([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})'), '$1.***.***-$4');

const maskRG = rg =>
    rg.replace(RegExp('([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{1})'), '$1.***.***-$4');


module.exports = {
    maskCPF,
    maskRG
};