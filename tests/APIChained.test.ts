/*import { test, expect, request } from '@playwright/test';

test('Chaining API responses', async ({ request }) => {
    // First request: Create a user and get the user ID
    const createUserResponse = await request.post('https://reqres.in/api/users?', {
        data: { name: 'John Doe', email: 'john@example.com' }
    });

    // Extract userId from response
    const responseBody = await createUserResponse.json();
    const userId = responseBody.id;  // Assuming response has { "id": 123 }

    console.log(`User ID: ${userId}`);

    // Second request: Use userId to fetch user details
    const userDetailsResponse = await request.get(`https://reqres.in/api/users?/${userId}`);

    // Validate user details
    expect(userDetailsResponse.ok()).toBeTruthy();
    const userDetails = await userDetailsResponse.json();
    console.log(`User Details:`, userDetails);
});*/

import { test, expect, request } from '@playwright/test';

test('Chaining API responses', async ({ request }) => {
    // First request: Create a user and get the user ID
    const createUserResponse = await request.post('https://reqres.in/api/users?', {
        headers:{
            'content-type':'application/json'
        },
        //data: { usename: 'John Doe', password: 'john@example.com' }
        data: { clientID: 'John Doe', clientSecret: 'john@example.com' }
    });

    // Extract userId from response
    const responseBody = await createUserResponse.json();
    const token = responseBody.BearerToken;  // Assuming response has { "id": 123 }

    console.log(`User ID: ${token}`);

    // Second request: Use userId to fetch user details
    const userDetailsResponse = await request.get(`https://reqres.in/api/users?/${token}`);

    // Validate user details
    expect(userDetailsResponse.ok()).toBeTruthy();
    const userDetails = await userDetailsResponse.json();
    console.log(`User Details:`, userDetails);
});
