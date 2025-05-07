import React, { useState } from "react";

interface RegisterProps {
//   loadUser: (user: user) => void;
    onRouteChange: (route: string) => void;
//     // onSubmitSignIn: (data: unknown) => void;
}

type user = {
    name: string;
    email: string;
    password: string;
    entries: number;
    joined: object;
}

export const Register = ({ onRouteChange }: RegisterProps) => {


    const [ user, setUser ] = useState<user>({
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: new Date
    });

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUser((prevUser) => ({
            ...prevUser, name: value
        }))
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUser((prevUser) => ({
            ...prevUser, email: value
        }))
    }

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUser((prevUser) => ({
            ...prevUser, password: value
        }))
    }

    // const onSubmitSignIn = () => {
    //     fetch('http://localhost:3000/signin', {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             email: user.email,
    //             password: user.password
    //         }),
    //     })
    //         .then((response) => response.json())
    //         .then((userData) => {
    //             if (userData.id) {
    //                 loadUser(userData);
    //                 onRouteChange('home');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Registration error:', error);
    //             // Handle the error, e.g., show an error message to the user
    //         });
    // };

    const onSubmitRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submission
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: user.email,
                password: user.password,
                name: user.name,
            }),
        })
            .then((response) => response.json())
            .then((userData) => {
                if (userData.id) {
                    // loadUser(userData);
                    onRouteChange('home');
                    console.log('registered: ', user.name , user.email, user.password)
                }
            })
            .catch((error) => {
                console.error('Registration error:', error);
                // Handle the error, e.g., show an error message to the user
            });
        // onSubmitSignIn();
    }

    return (
        <>
            <article className="br2 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa3 black-80">
                    <form className="measure center" onSubmit={onSubmitRegister}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email"
                                    id="email-address"
                                    onChange={onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </form>
                </main>
            </article>
        </>
    );
};

// import React from 'react';

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       name: ''
//     }
//   }

//   onNameChange = (event) => {
//     this.setState({name: event.target.value})
//   }

//   onEmailChange = (event) => {
//     this.setState({email: event.target.value})
//   }

//   onPasswordChange = (event) => {
//     this.setState({password: event.target.value})
//   }

//   onSubmitSignIn = () => {
//     fetch('http://localhost:3000/register', {
//       method: 'post',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password,
//         name: this.state.name
//       })
//     })
//       .then(response => response.json())
//       .then(user => {
//         if (user) {
//           this.props.loadUser(user)
//           this.props.onRouteChange('home');
//         }
//       })
//   }

//   render() {
//     return (
//       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//         <main className="pa4 black-80">
//           <div className="measure">
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend className="f1 fw6 ph0 mh0">Register</legend>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
//                 <input
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="text"
//                   name="name"
//                   id="name"
//                   onChange={this.onNameChange}
//                 />
//               </div>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
//                 <input
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="email"
//                   name="email-address"
//                   id="email-address"
//                   onChange={this.onEmailChange}
//                 />
//               </div>
//               <div className="mv3">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
//                 <input
//                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
//                   type="password"
//                   name="password"
//                   id="password"
//                   onChange={this.onPasswordChange}
//                 />
//               </div>
//             </fieldset>
//             <div className="">
//               <input
//                 onClick={this.onSubmitSignIn}
//                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
//                 type="submit"
//                 value="Register"
//               />
//             </div>
//           </div>
//         </main>
//       </article>
//     );
//   }
// }

// export default Register;