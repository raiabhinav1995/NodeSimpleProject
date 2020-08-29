// const server=require('./Date');

exports.currentDate=function()
{
    return new Date().toLocaleDateString('en-US');
}