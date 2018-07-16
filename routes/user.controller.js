const createUsers = require('../lib/users/createUsers');
const selectUserByID = require('../lib/users/selectUserByID');
const showUsers = require('../lib/users/showUsers');
const updateUser = require('../lib/users/updateUsers');
const removeUser = require('../lib/users/removeUsers');

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