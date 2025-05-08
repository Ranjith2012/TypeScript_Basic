import {test, expect , request } from '@playwright/test';
let id:any;

test('/ test', async ({ request }) => {
    const res = await request.get('https://api.restful-api.dev/objects');
    expect(res.ok()).toBeTruthy();
    const resbody = await res.json();
});

test('Create the object',async ({request}) =>{
    const res = await request.post('https://api.restful-api.dev/objects',{
        data:{
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                },
            }      
    });
    expect(res.ok()).toBeTruthy();
    const resbody = await res.json();
    id  = resbody.id;
})

test('Get the object',async({request})=>{
    const res = await request.get(`https://api.restful-api.dev/objects/${id}`);
    expect(res.ok()).toBeTruthy();
    const resbody = await res.json();
    console.log(resbody);
})


test('Update the object', async({request})=>{
    const res = await request.put(`https://api.restful-api.dev/objects/${id}`,{
        data:{
            "name": "Dell Laptop",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i11",
                "Hard disk size": "1 TB"
            },
        }
    })
    expect(res.ok()).toBeTruthy();
    const resbody = await res.json();
    expect(resbody.name).toBe('Dell Laptop');
    console.log(resbody);
})

test('Delete the object', async({request})=>{
    const res = await request.delete(`https://api.restful-api.dev/objects/${id}`);
    expect(res.ok()).toBeTruthy();
    const resget = await request.get(`https://api.restful-api.dev/objects/${id}`);
    expect(resget.ok()).toBeFalsy();
})