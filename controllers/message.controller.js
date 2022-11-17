const Message = require("../models/message.model");
/**
 * use to save Messages
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const saveMessage = async (req, res) => {
  if (req.body) {
    const { message, user } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newMessage = new Message({
      message,
      userId: user,
    });
    await newMessage.save();
    return res.status(201).send("Message successfully sent");

  }
  return res.status(400).send();
}
/**
 * use to get all Message by Id
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getMessgeById = async (req, res) => {
  if (req.params.id) {
    const message = await Message.findById(req.params.id);
    return res.status(200).json({ message: message });
  }
};
/**
 * use to get all Messages by User Id
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getMessgeByUserId = async (req, res) => {
  if (req.body.user) {
    const message = await Message.find({ userId: req.body.user });
    return res.status(200).json({ message: message });
  }
};
/**
 * use to get all Messages 
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const getAllMessages = async (req, res) => {
  const message = await Message.find().populate("userId", "message");
  return res.status(200).json({ message: message });
};

/**
 * use to delete Message
 * @param {Object} req
 * @param {Object} res
 * @returns {Object} res
 */
const deleteMessage = async (req, res) => {
  if (req.params.id) {
    await Message.findByIdAndDelete(req.params.id);
    return res.status(200).send("Message successfully deleted");
  }
};

module.exports = {
  saveMessage,
  getAllMessages,
  getMessgeById,
  getMessgeByUserId,
  deleteMessage,
};
