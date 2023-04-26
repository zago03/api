exports.getUsers = async(req,res) => {
    res.send("Get all users");
}

exports.getUsers = async (req, res) => {
    const userID = req.params.id;
    res.send("Hello, user #" + userID);
};

exports.createUser = async (req,res) => {

};

exports.updateUser = async (req,res) => {

};

exports.deleteUser = async (req,res) => {

};