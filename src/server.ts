function WelcomeMsg(name: string) {
    console.log(`Welcome ${name}`);

    const user = {
        name: "Abhishek",
    };

    const fname = user.name;

    return name + fname;
}

WelcomeMsg("Abhishek");
