const add = (a,b)=>a+b;

test("Add to 7", ()=>{
    const result = add(3,4)
    expect(result).toBe(7);
})

// npm run test -- --watch for running "jest --watch"