export const signup = async (req, res) => {
  res.json({
    data: "you come signup endpoint",
  });
};

export const login = async (req, res) => {
  res.json({
    data: "you hit the login endpoint",
  });
};

export const logout = (req, res) => {
  res.json({
    data: "you hit the logout endpoint",
  });
};
