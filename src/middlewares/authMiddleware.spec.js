import { authMiddleware } from './authMiddleware';
import { authenticate, register } from "../actions";
import { serverLogin, serverRegister } from "../api";

const data = {
    success: true,
    token: "test"
}

jest.mock('../api');

describe("authMiddleware", () => {
    afterAll(jest.clearAllMocks)

    describe("#AUTHENTICATE", () => {
        describe("with correct credentials", () => {
            it("authenticates through api", async () => {
                serverLogin.mockImplementation(() => data)
                const dispatch = jest.fn();

                await authMiddleware({ dispatch })()(
                    authenticate("login", "password")
                );
                expect(serverLogin).toBeCalledWith("login", "password");
                expect(dispatch).toBeCalledWith({
                    type: "LOG_IN",
                });
            });
        });
        describe("with wrong credentials", () => {
            it("authenticates through api", async () => {
                serverLogin.mockImplementation(() => data == null)
                const dispatch = jest.fn();

                await authMiddleware({ dispatch })()(
                    authenticate("login", "password")
                );
                expect(dispatch).not.toBeCalled();
            });
        });
    });

    describe.skip("#REGISTRATION", () => {
        describe("with correct credentials", () => {
            it("registration through api", async () => {
                serverRegister.mockImplementation(() => data)
                const dispatch = jest.fn();

                await authMiddleware({ dispatch })()(
                    register("login", "password", "name", "surname")
                );
                expect(serverRegister).toBeCalledWith("login", "password", "name", "surname");
                expect(dispatch).toBeCalledWith({
                    type: "LOG_IN"
                });
            });
        });
        describe("with wrong credentials", () => {
            it("registration through api", async () => {
                serverRegister.mockImplementation(() => data.success = false);
                const dispatch = jest.fn();

                await authMiddleware({ dispatch })()(
                    register("login", "password", "name", "surname")
                );
                expect(dispatch).not.toBeCalled();
            });
        });
    });
});