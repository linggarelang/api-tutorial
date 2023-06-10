const postsController = {
  getAll: async (req, res) => {
    try {
      res.json({ message: "Get All..." });
    } catch (e) {
      console.log(e);
    }
  },
};
