import { test, expect } from '@playwright/test';

const baseURL = 'https://api.apilayer.com/sentiment/analysis';
test('Positive Sentimental analysis', async ({ request }) => {
    const sampleText = 'I love playwright';
    const response = await request.post(`${baseURL}`,{
    headers: {
      'apikey': 'LKc1ssecwdYE1tn6vhwJ6JOBKiVGxXYa',
      'Content-Type': 'text/plain'
    },
    data : sampleText
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  const resbody = await response.json();
  console.log(resbody);
  expect(resbody.sentiment).toBe('positive');
});

test('Negative Sentimental analysis', async ({ request }) => {
    const sampleText = 'I hate you';
    const response = await request.post(`${baseURL}`,{
    headers: {
      'apikey': 'LKc1ssecwdYE1tn6vhwJ6JOBKiVGxXYa',
      'Content-Type': 'text/plain'
    },
    data : sampleText
  });
  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  const resbody = await response.json();
  console.log(resbody);
  expect(resbody.sentiment).toBe('negative');
});