const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  updateUser,
  updateUserPartial,
  deleteUser,
} = require("../controllers/user.controllers");
const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { mockRequest, mockResponse } = require("jest-mock-req-res");

// Mock user data for testing
const testUser = {
  _id: "60d92a8005cc5f0015c32d88",
  email: "test@example.com",
  name: "Test User",
  age: 30,
  city: "Test City",
  zipCode: "12345",
  password: "testpassword",
};

// Mock req.body for different requests
const mockReqBody = {
  register: {
    email: "newuser@example.com",
    name: "New User",
    age: 25,
    city: "New City",
    zipCode: "54321",
    password: "newpassword",
  },
  login: {
    email: testUser.email,
    password: testUser.password,
  },
  update: {
    name: "Updated Name",
    age: 35,
  },
  partialUpdate: {
    name: "Partial Updated Name",
  },
};

// Mock req.params for different requests
const mockReqParams = {
  userId: testUser._id,
};

describe("User Controller Tests", () => {
  let mockRes;

  beforeEach(() => {
    mockRes = mockResponse();
  });

  // Test createUser function
  it("should create a new user", async () => {
    const mockReq = mockRequest(mockReqBody.register);

    User.create = jest.fn().mockResolvedValue(testUser);

    await createUser(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith(testUser);
  });

  // Test loginUser function
  it("should log in an existing user", async () => {
    const mockReq = mockRequest(mockReqBody.login);

    User.findOne = jest.fn().mockResolvedValue(testUser);
    bcrypt.compare = jest.fn().mockResolvedValue(true);
    jwt.sign = jest.fn().mockReturnValue("mocktoken");

    await loginUser(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({ token: "mocktoken" });
  });

  // Test getAllUsers function
  it("should get all users", async () => {
    const mockReq = mockRequest();

    User.find = jest.fn().mockResolvedValue([testUser]);

    await getAllUsers(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith([testUser]);
  });

  // Test getUser function
  it("should get a user by ID", async () => {
    const mockReq = mockRequest({ params: mockReqParams });

    User.findById = jest.fn().mockResolvedValue(testUser);

    await getUser(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(testUser);
  });

  // Test updateUser function
  it("should update a user by ID", async () => {
    const mockReq = mockRequest({
      params: mockReqParams,
      body: mockReqBody.update,
    });

    User.findByIdAndUpdate = jest.fn().mockResolvedValue(testUser);

    await updateUser(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(testUser);
  });

  // Test updateUserPartial function
  it("should partially update a user by ID", async () => {
    const mockReq = mockRequest({
      params: mockReqParams,
      body: mockReqBody.partialUpdate,
    });

    User.findByIdAndUpdate = jest.fn().mockResolvedValue(testUser);

    await updateUserPartial(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(testUser);
  });

  // Test deleteUser function
  it("should delete a user by ID", async () => {
    const mockReq = mockRequest({ params: mockReqParams });

    User.findByIdAndDelete = jest.fn().mockResolvedValue(testUser);

    await deleteUser(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "User deleted successfully",
    });
  });
});
