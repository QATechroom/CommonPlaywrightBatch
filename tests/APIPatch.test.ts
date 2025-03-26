import { test, expect } from '@playwright/test';

test('Verify API POST Request', async ({ request }) => {
    const response = await request.patch('https://reqres.in/api/users', {
        
        headers:{
            'content-type':'application/json'
        },
        data: {
            name: 'John Doe',
            job: 'QA Engineer',
            email:'abc@email.com'
        }
    });

    expect(response.status()).toBe(200); // Created

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.name).toBe('John Doe'); // Validate response
    expect(responseBody.job).toBe('QA Engineer');
});