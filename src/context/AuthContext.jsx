import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logIn = (email, password) => {
		if (email !== "test@test.com" || password !== "test") {
			return
		}

		setIsLoggedIn(true);
	};

	const logOut = () => {
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export const authHOC = (WrappedComponent) => {
	return class extends React.Component {
		static displayName = "authHOC"

		render() {
			return (
				<AuthContext.Consumer>
					{
						(contextProps) => {
							return <WrappedComponent {...contextProps} {...this.props} />
						}
					}
				</AuthContext.Consumer>
			)
		}
	}
}