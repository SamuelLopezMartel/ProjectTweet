const createUsers = require('../lib/createUsers');
const selectUserByID = require('../lib/selectUserByID');
const showUsers = require('../lib/showUsers');
const updateUser = require('../lib/updateUsers');
const removeUser = require('../lib/removeUsers');

const index = (req, resp) => showUsers(resp);
const show = (req,res) => selectUserByID(req.params.id,res);
const create = async (req,res) =>
{
    const contentBody = req.body;
    await createUsers.createNewUserDB(contentBody.username,contentBody.email);
    await showUsers(res);
}

const update = async (req,res) =>
{
    const userName = req.params.name;
    const updateData = req.body;
    await updateUser(userName,updateData.username,updateData.email);
    await showUsers(res);
}

const destroy = async(req, res) =>
{
    const userName = req.params.id;
    await removeUser(userName);
    await showUsers(res);
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}