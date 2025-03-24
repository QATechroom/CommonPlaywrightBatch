import { test, expect } from '@playwright/test';

test('Verify API POST Request', async ({ request }) => {
    const requestData = JSON.parse(fs.readFileSync('existingfile1.json', 'utf-8'));
    const response = await request.post('https://reqres.in/api/users', {

        data: requestData
    });

    expect(response.status()).toBe(201); // Created

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.name).toBe('John Doe'); // Validate response
    expect(responseBody.job).toBe('QA Engineer');
});