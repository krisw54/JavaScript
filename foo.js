function foo() {
    let str = " ";
    for (let i = 1; i < 21; i++) {
        if (i % 3 == 0 && i % 5 == 0)
        {
            str += (" foo-bah ");
        } else if (i % 3 == 0){
            str += (" foo ");
        } else if (i % 5 == 0){
            str += (" bah ");
        }
        else {
            str += (" ") + (i) + (" ");
        }
    }
    console.log(str);
}

foo();
