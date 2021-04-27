import React from 'react'
import Userfront from '@userfront/react'

Userfront.init("rbvx8dbd");

const SignupForm = Userfront.build({
  toolId: "klnnkr"
});

function SignUp() {
    return (
        <SignupForm />
    )
}

export default SignUp
