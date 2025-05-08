import { test, expect } from '@playwright/test';
const baseURL = 'https://api.apilayer.com/email_verification';
let emailID = 'test@gmail.com';

test('Email ID verification', async ({ request }) => {
  const response = await request.get(`${baseURL}/${emailID}`,{
    headers: {
      'apikey': 'LKc1ssecwdYE1tn6vhwJ6JOBKiVGxXYa'
    }
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  const resbody = await response.json();
  console.log(resbody);
  expect(resbody.email).toBe(emailID);
});


test('Check Email ID', async({request}) => {
  const response = await request.get(`${baseURL}/check?email=${emailID}`,{
    headers: {
      'apikey': 'LKc1ssecwdYE1tn6vhwJ6JOBKiVGxXYa'
    }
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  const resbody = await response.json();
  console.log(resbody);
});